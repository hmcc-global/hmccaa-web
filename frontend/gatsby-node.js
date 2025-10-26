/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const { CreateEventPages } = require("./src/page-generation/events");
const { CreateSermonPages } = require("./src/page-generation/sermons");
const { CreateCustomPages } = require("./src/page-generation/custom");
const { Pages } = require("./src/page-generation/create-page");

const fs = require("fs");
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  let pages = new Pages(createPage, reporter);
  let createPageFn = page => pages.addPage(page);
  let createPageAndPrintFn = page => {
    reporter.info(`Creating page: ${page.path}`);
    createPageFn(page);
  };

  await CreateEventPages(graphql, createPageAndPrintFn, reporter);

  await CreateSermonPages(graphql, createPageFn, reporter);

  await CreateCustomPages(graphql, createPageAndPrintFn, reporter);

  pages.createPages();
};

// gatsby-node.js

// --- configurable settings ---
const MEM_LOG_INTERVAL_MS = 3_000; // log every 3s
const SAMPLE_NODE_TYPES = true; // occasional node type sampling
const NODE_SAMPLE_RATE = 0.0005; // ~0.05% of nodes get logged
// ------------------------------

let memInterval = null;

function formatMem() {
  const m = process.memoryUsage();
  const toMB = v => (v / 1024 / 1024).toFixed(2);
  return `rss=${toMB(m.rss)} MB, heapUsed=${toMB(
    m.heapUsed
  )} MB, heapTotal=${toMB(m.heapTotal)} MB, external=${toMB(m.external)} MB`;
}

function logMem(label) {
  console.log(
    `[${new Date().toISOString()}] [${label}] Memory: ${formatMem()}`
  );
}

function startMemTicker(contextLabel = "ticker") {
  if (memInterval) return; // avoid duplicates
  memInterval = setInterval(() => {
    logMem(contextLabel);
  }, MEM_LOG_INTERVAL_MS);

  // Ensure ticker doesn't keep Node alive if Gatsby tries to exit
  memInterval.unref?.();
}

function stopMemTicker() {
  if (memInterval) {
    clearInterval(memInterval);
    memInterval = null;
  }
}

exports.onPreInit = () => {
  logMem("onPreInit");
  startMemTicker("build");
};

exports.onPreBootstrap = () => {
  logMem("onPreBootstrap");
};

exports.createSchemaCustomization = () => {
  logMem("createSchemaCustomization");
};

exports.sourceNodes = async args => {
  logMem("before sourceNodes");
  // You can wrap long-running source plugins with temporary timers if needed.
  // Example: args.reporter.activityTimer("Custom sourceNodes timer").start()/end()
};

exports.onCreateNode = async ({ node, getNode }) => {
  // Only care about File nodes (these represent actual files on disk)
  if (node.internal.type === "File") {
    try {
      const stats = fs.statSync(node.absolutePath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      const parent = node.parent ? getNode(node.parent) : null;
      console.log(
        `[FileNode] Created: ${path.relative(
          process.cwd(),
          node.absolutePath
        )} (${sizeMB} MB) (parent type: ${parent?.internal?.type})`
      );
    } catch (err) {
      console.log(
        `[FileNode] Created: ${node.absolutePath} (size unknown: ${err.message})`
      );
    }
  }
};

exports.onPostBootstrap = ({ getNodes }) => {
  logMem("onPostBootstrap");
  console.log(`[nodes] count=${getNodes().length}`);
};

exports.onPreExtractQueries = () => {
  logMem("onPreExtractQueries");
};

exports.onCreatePage = () => {
  logMem("onCreatePage");
};

exports.onPostBuild = ({ getNodes }) => {
  logMem("onPostBuild");
  console.log(`[nodes] final count=${getNodes().length}`);
  stopMemTicker();
};

// Safety net: stop ticker if Gatsby exits unexpectedly
process.on("exit", code => {
  logMem(`process exit code=${code}`);
  stopMemTicker();
});
process.on("SIGINT", () => {
  logMem("SIGINT");
  stopMemTicker();
});
process.on("SIGTERM", () => {
  logMem("SIGTERM");
  stopMemTicker();
});
process.on("uncaughtException", err => {
  console.error("[uncaughtException]", err && (err.stack || err));
  logMem("uncaughtException");
  stopMemTicker();
});
process.on("unhandledRejection", reason => {
  console.error("[unhandledRejection]", reason && (reason.stack || reason));
  logMem("unhandledRejection");
  stopMemTicker();
});

///// MONKEY PATCH

const { createRemoteFileNode } = require("gatsby-source-filesystem");

// Wrap it with a logger
const tracedCreateRemoteFileNode = async args => {
  console.log("[TRACE] createRemoteFileNode called with URL:", args.url);

  // Print a short stack trace so you can see which plugin invoked it
  console.log(new Error().stack);

  return createRemoteFileNode(args);
};

// Expose it so other plugins still get a working function
exports.createResolvers = ({ createResolvers }) => {
  // no-op, just here so Gatsby doesn't complain
};

// Monkey‑patch the require cache so any plugin that imports it gets our wrapper
require.cache[
  require.resolve("gatsby-source-filesystem")
].exports.createRemoteFileNode = tracedCreateRemoteFileNode;

////////////
