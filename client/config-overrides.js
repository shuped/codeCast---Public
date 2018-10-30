const { override, addBabelPlugin } = require("customize-cra");

module.exports.default = override(
  addBabelPlugin(['module:antd'])
);

