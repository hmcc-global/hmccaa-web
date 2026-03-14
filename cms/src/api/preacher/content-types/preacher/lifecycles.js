const { createSermonDependencyGuard } = require("../../../../utils/lifecycles");

module.exports = createSermonDependencyGuard({
  filterField: "Preacher",
  label: "preacher",
});
