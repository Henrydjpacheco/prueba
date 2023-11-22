const {Category} = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    await Category.create(req.body);
    response(res, 201,{ message:"the category has been created sussesfully"})
};  