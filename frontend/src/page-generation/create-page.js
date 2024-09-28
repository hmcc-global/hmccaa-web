class Pages {
  constructor(createPageAPI, reporter) {
    this.pages = [];
    this.createPageAPI = createPageAPI;
    this.reporter = reporter;
  }

  addPage({ path, component, context }) {
    this.pages.push({ path, component, context });
  }

  createPage(page) {
    this.createPageAPI(page);
  }

  createPages() {
    this.reporter.info(`${this.pages.length} pages to create...`);
    const timer = this.reporter.activityTimer("Create All Pages");
    timer.start();

    this.pages.forEach(page => this.createPage(page));

    timer.end();
  }
}

module.exports.Pages = Pages;
