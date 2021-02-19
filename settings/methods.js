const _ = require('lodash');

const toCamelCase = (str) => {
  return _.upperFirst(_.camelCase(str));
};

const toKebabCase = (str) => {
  return _.kebabCase(str);
};

const toLowerCamelCase = (str) => {
  return _.lowerFirst(_.camelCase(str));
};

const toSnakeCase = (str) => {
  return _.snakeCase(str);
}

const toUpperFirst = (str) => {
  return _.upperFirst(str);
}

const toUpperCase = (str) => {
  return _.upperCase(str);
}

module.exports = {
  toCamelCase,
  toKebabCase,
  toLowerCamelCase,
  toSnakeCase,
  toUpperFirst,
  toUpperCase
};
