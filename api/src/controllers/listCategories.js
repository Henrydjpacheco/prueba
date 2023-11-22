const {Category,SubCategory} = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const categories =  await Category.findAll()
    response(res, 201, categories)
};  