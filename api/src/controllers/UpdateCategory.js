const { Category} =require('../data');
const { response } = require('../utils');
module.exports = async (req, res ) => {
    const {id} = req.params;
    const category = await Category.findOne({ where: { id} });
    await category.update({active: body.active});
    response(res, 200, category)
}