const { toCamelCase, toKebabCase } = require('../../methods');

const createImportLine = (componentName) =>
  `import { ${toCamelCase(componentName)} } from './${toKebabCase(componentName)}';\n`;

const createExportLine = (componentName) => `export * from './${toKebabCase(componentName)}';\n`;

const getContent = (_, { sectionFromSourceMap }) => {
  const componentNames = sectionFromSourceMap.content['t'];

  const fileLines = componentNames.map(createExportLine);
  return fileLines.join('');
};

const doSomething = (str) => {
  console.log(str);
};

module.exports = {
  getContent,
  doSomething,
};
