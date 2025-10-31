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

// Our site does care to download images, so that the image/sharp plugins
// can optimize them and such, but we don't care to download audio files,
// because all cases where we use them (aka just in sermon recordings) only
// rely on the mp3 url and the frontend loads it directly from CMS with that
// url.
//
// Unfortunately he `gatsby-source-strapi-graphql` plugin doesn't give us
// an option to customize which file types we actually care to download.
// Thus this hack just goes through and deletes all the audio files one by
// one as they're being downloaded.
//
// This is important because over time the number of sermons tracked on the
// website grows, and thus the amount of disk space being used to download
// audios also grows - and each ~50MB file does add up. For example, we've
// had issues where the free tier Github runner runs out of disk space and
// fails as a result of downloading too many audio files.
let totalFileBytes = 0;
let totalDeletedBytes = 0;
exports.onCreateNode = async ({ node, actions }) => {
  const { deleteNode } = actions;

  // Only care about File nodes (these represent actual files on disk)
  if (node.internal.type === "File") {
    let sizeBytes = 0;
    try {
      const stats = fs.statSync(node.absolutePath);
      sizeBytes = stats.size;
      totalFileBytes += sizeBytes;
    } catch (err) {
      console.log(
        `[FileNode] Created: ${node.absolutePath} (size unknown: ${err.message})`
      );
    }

    // Remove audio files to save on room
    if (
      node.extension &&
      ["mp3", "wav", "flac"].includes(node.extension.toLowerCase())
    ) {
      try {
        fs.unlinkSync(node.absolutePath);
        totalDeletedBytes += sizeBytes;
      } catch (err) {
        console.error("Error deleting audio file:", err.message);
      }

      deleteNode({ node });
    }
  }
};

// ------- Log Memory on various steps and periodically -------

// --- configurable settings ---
const MEM_LOG_INTERVAL_MS = 30_000; // log every 3s0
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

exports.onPostBootstrap = ({ getNodes }) => {
  logMem("onPostBootstrap");
  console.log(`[nodes] count=${getNodes().length}`);
};

exports.onPreExtractQueries = () => {
  logMem("onPreExtractQueries");
};

exports.onPostBuild = ({ getNodes }) => {
  logMem("onPostBuild");
  console.log(
    `[${new Date().toISOString()}] [nodes] final count=${getNodes().length}`
  );
  console.log(
    `[${new Date().toISOString()}] [files created] sizeMB=${(
      totalFileBytes /
      1024 /
      1024
    ).toFixed(2)}`
  );
  console.log(
    `[${new Date().toISOString()}] [files deleted] sizeMB=${(
      totalDeletedBytes /
      1024 /
      1024
    ).toFixed(2)}`
  );
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
