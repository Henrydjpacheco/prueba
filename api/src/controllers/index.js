const { catchedAsync } = require("../utils");
module.exports = {
  createCategory: catchedAsync(require("./createCategory")),
  listCategories: catchedAsync(require("./listCategories")),
  createSubcategory: catchedAsync(require("./createSubCategory")),
  listSubCategory: catchedAsync(require("./listSubCategory")),
};
