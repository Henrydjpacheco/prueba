const { Category} = require("../data");
const response = require("../utils/response");

module.exports = async (req, res) => {
const {id} = req.params;
  const category = await Category.findByPk(id);
  response(res, 200,  category);
}; 
