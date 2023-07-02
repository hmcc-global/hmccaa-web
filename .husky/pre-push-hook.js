import chalk from "chalk";
import { stderr } from "process";
import sh from "shelljs";

import { Spinner } from "cli-spinner";
Spinner.setDefaultSpinnerString("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
Spinner.setDefaultSpinnerDelay(80);

function exec(command, options) {
    return new Promise(resolve => {
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
    const msg = "Making sure your code looks formatted...";
    const spinner = new Spinner(" %s " + chalk.blue(msg));
    spinner.start();
    
    const result = (await exec(`npm run format`, { silent: true })) || [0, "", ""];
    const { stdout: modified } = sh.exec(`git diff --name-only`, { silent: true}) || "";

    spinner.stop(true);
    if (code || modified.length) {
        console.log(chalk.red(` X ${msg}\n`));

        switch (code) {
            case "2": {
                console.log(
                    chalk.red("error"),
                    `Seems like there are issues with your code. Error:\n`,
                    `\n${stderr}`,
                );
                break;
            }

            default: {
                if (modified.length) {
                    const files = modified.split("\n").filter(file => !file);

                    console.log(
                        console.red("error"),
                        `The following files weren't formatted correctly:\n ` + files.join("\n ==> "),
                        chalk.green("\n\ninfo"),
                        "All files are now formatted!",
                    );
                } else {
                    console.log("Prettify results:\n\n" + stdout);
                }
                break;
            }
        }
        console.log(chalk.orange("\n -> Verify & commit the changes, then try again?\n"));
        process.exit(1);
    }

    console.log(chalk.yellow(" Your code looks fabulous! "));
}

async function validateLinting() {
    const msg = "Scanning your code for potential bugs ...";
    const spinner = new Spinner(" %s " + chalk.blue(msg));
    spinner.start();
    (await exec('cd frontend'));
    const result = (await exec('npm run lint', { silent: true })) || [0, "", ""];
    const stderr = result[2];
    const code = parseErrorCode(stderr);
    spinner.stop(true);
    if (code) {
        console.log(chalk.red(` X ${msg}\n`));
        console.log(
            `${chalk.green(
               `  Your code has not passed linting validation. Fix the following violations and try again. \n` 
            )}`,
        );
        console.log(result[1].substring(result[1].indexOf("ERROR"), result[1].indexOf("info")));
        process.exit(1);
    }
    console.log(chalk.blue(`\n Your code is valid! `));
}

(async () => {
    console.log("");
    console.log("Running pre-push checks:");

    await validateLinting();
    await prettifyCode();

    console.log("All's good, git push can proceed...");
    console.log("");
})