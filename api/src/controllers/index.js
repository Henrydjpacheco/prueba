const { catchedAsync } = require("../utils");
module.exports = {
  createCategory: catchedAsync(require("./createCategory")),
  listCategories: catchedAsync(require("./listCategories")),
  getCategory: catchedAsync(require("./getCategory")),
  UpdateCategory: catchedAsync(require("./UpdateCategory")),
  createSubcategory: catchedAsync(require("./createSubCategory")),
  listSubCategory: catchedAsync(require("./listSubCategory")),
};
