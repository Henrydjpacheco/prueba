const {Theme} = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const theme =  await Theme.findAll()
    response(res, 201, theme)
};  