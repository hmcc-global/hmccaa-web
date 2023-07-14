#!/usr/bin/env node

/**
 * Git pre-push hook.
 * Husky runs this script whenever you attempt to push changes to the remote repo.
 *
 * This script will:
 *  - Run "yarn prettify" to ensure the code is properly formatted.
 *  - Run "yarn" to ensure package.json changes are reflected in yarn.lock.
 *  - Validate there is a commit with updates to CHANGELOG.md.
 *
 * If "yarn prettify" or "yarn" commands fail, the commands implicitly take corrective actions & the git push
 * command will fail. The developer should inspect the new changes & re-attempt the push.
 *
 * If the CHANGELOG.md file was not updated and files in were touched,
 * the git push command will fail, the developer will need to update and commit their changes
 * to the CHANGELOG.md file before proceeding.
 *
 * You can bypass this script using the git "--no-verify" argument. Please don't do that!
 */

import chalk from "chalk";
import sh  from "shelljs";

import { Spinner } from "cli-spinner";
Spinner.setDefaultSpinnerString("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
Spinner.setDefaultSpinnerDelay(80);

function exec(command, options) {
  return new Promise((resolve) => {
    sh.exec(command, options || {}, (...args) => {
      resolve(args);
    });
  });
}

function parseErrorCode(str) {
  const result = /.*Command failed with exit code\s?(\d)\..*/.exec(str);
  return result && result.length > 1 ? result[1] : undefined;
}

async function prettifyCode() {
  const msg = "Making sure your code looks pretty...";
  const spinner = new Spinner(" %s " + chalk.cyan(msg));
  spinner.start();

  const result = (await exec(`npm run format`, { silent: true })) || [
    0,
    "",
    "",
  ];
  const stderr = result[2];
  const stdout = result[1];
  const code = (parseErrorCode(stderr) || result[0] || "").toString().trim();
  const { stdout: modified } =
    sh.exec(`git diff --name-only`, { silent: true }) || "";

  spinner.stop(true);

  if (code || modified.length) {
    console.log(chalk.red(` ✘ ${msg}\n`));

    switch (code) {
      // Couldn't format coz the code has errors.
      case "2": {
        // Prettify failed because it found errors in one or more files.
        console.log(
          chalk.red("error"),
          `Seems like there are issues with your code. Error:\n`,
          `\n${stderr}`
        );
        break;
      }

      default: {
        // Prettify failed because it found files that needed to be prettified coz formatting was off.
        // Look at the staged files to find out which ones have been prettified & list in a user-friendly
        // message.
        if (modified.length) {
          const files = modified.split("\n").filter((file) => !!file);

          console.log(
            chalk.red("error"),
            `The following files weren't formatted correctly:\n ‣ ` +
              files.join("\n ‣ "),
            chalk.blue("\n\ninfo"),
            "All files are now pretty!"
          );
        } else {
          console.log("Prettify result:\n\n" + stdout);
        }
        break;
      }
    }

    console.log(
      chalk.yellow("\n→ Verify & commit the changes, then try again?\n")
    );
    process.exit(1);
  }

  console.log(chalk.green(" ✔ Your code looks fabulous! 🎉"));
}

async function validateLinting() {
  const msg = "Scanning your code for potential bugs 🐛 ...";
  const spinner = new Spinner(" %s " + chalk.cyan(msg));
  sh.cd("frontend");
  spinner.start();
  const result = (await exec(`npm run lint`, { silent: true })) || [0, "", ""];
  const stderr = result[2];
  const code = parseErrorCode(stderr);
  spinner.stop(true);
  if (code) {
    console.log(chalk.red(` ✘ ${msg}\n`));
    console.log(
      `${chalk.yellow(
        ` ☠️  Your code has not passed linting validation. Fix the following violations and try again. \n`
      )}`
    );
    console.log(
      result[1].substring(result[1].indexOf("ERROR"), result[1].indexOf("info"))
    );
    process.exit(1);
  }
  console.log(chalk.green("\n ✔ Your code is valid! 🎉"));
}

(async () => {
  console.log("");
  console.log("Running pre-push checks:");

  await validateLinting();
  await prettifyCode();

  console.log("All's good 👌, git push can proceed...");
  console.log("");
})();
