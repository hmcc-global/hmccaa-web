const sh = require("shelljs");
const { Spinner } = require("cli-spinner");

Spinner.setDefaultSpinnerString("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
Spinner.setDefaultSpinnerDelay(80);

class Pages {
  constructor(createPageAPI) {
    this.pages = [];
    this.createPageAPI = createPageAPI;
  }

  addPage({ path, component, context }) {
    this.pages.push({ path, component, context });
  }

  createPage(page) {
    this.createPageAPI(page);
  }

  createPages() {
    const spinner = new Spinner(`%s  ${this.pages.length} pages to create...`);
    spinner.start();
    this.pages.forEach(page => this.createPage(page));
    spinner.stop(true);
  }
}

module.exports.Pages = Pages;
