const { SubCategory } = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  await SubCategory.create(req.body);

  response(res, 201, {
    message: "the subcategory has been created sussesfully",
  });
};
