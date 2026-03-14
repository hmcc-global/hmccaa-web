const { createSermonDependencyGuard } = require("../../../../utils/lifecycles");

module.exports = createSermonDependencyGuard({
  filterField: "Series",
  label: "sermon series",
});
