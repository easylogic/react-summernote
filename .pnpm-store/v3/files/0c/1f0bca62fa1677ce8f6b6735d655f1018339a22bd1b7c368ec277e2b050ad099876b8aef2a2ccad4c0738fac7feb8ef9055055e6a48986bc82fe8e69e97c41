'use strict';

const path = require('path');
const glob = require('glob-promise');

function _interopNamespaceDefault(e) {
	const n = Object.create(null);
	if (e) {
		for (const k in e) {
			n[k] = e[k];
		}
	}
	n.default = e;
	return n;
}

const path__namespace = /*#__PURE__*/_interopNamespaceDefault(path);

const defaultPropFilter = (prop) => {
  return !prop.parent?.fileName.includes("node_modules");
};

const getDocgen = async (config) => {
  const docGen = await import('react-docgen-typescript');
  const {
    tsconfigPath,
    compilerOptions,
    propFilter = defaultPropFilter,
    setDisplayName,
    typePropName,
    ...rest
  } = config;
  const docgenOptions = {
    propFilter,
    ...rest
  };
  return docGen.withCompilerOptions(
    {},
    docgenOptions
  );
};
const getProgram = async (config, oldProgram) => {
  const { default: ts } = await import('typescript');
  const { getTSConfigFile } = await import('./chunks/typescript.cjs');
  let compilerOptions = {
    jsx: ts.JsxEmit.React,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.Latest
  };
  if (config.compilerOptions) {
    compilerOptions = {
      ...compilerOptions,
      ...config.compilerOptions
    };
  } else {
    const tsconfigPath = config.tsconfigPath ?? "./tsconfig.json";
    const { options: tsOptions } = getTSConfigFile(tsconfigPath);
    compilerOptions = { ...compilerOptions, ...tsOptions };
  }
  const files = (config.include ?? ["**/**.tsx"]).map(
    (filePath) => glob.sync(
      path__namespace.isAbsolute(filePath) ? filePath : path__namespace.join(process.cwd(), filePath)
    )
  ).reduce((carry, files2) => carry.concat(files2), []);
  return ts.createProgram(files, compilerOptions, void 0, oldProgram);
};
function reactDocgenTypescript(config = {}) {
  let tsProgram;
  let docGenParser;
  let generateDocgenCodeBlock;
  let generateOptions;
  let filter;
  return {
    name: "vite:react-docgen-typescript",
    async configResolved() {
      const { getGenerateOptions } = await import('./chunks/options.cjs');
      generateDocgenCodeBlock = (await import('./chunks/generate.cjs')).generateDocgenCodeBlock;
      const { createFilter } = await import('vite');
      docGenParser = await getDocgen(config);
      generateOptions = getGenerateOptions(config);
      tsProgram = await getProgram(config);
      filter = createFilter(
        config.include ?? ["**/**.tsx"],
        config.exclude ?? ["**/**.stories.tsx"]
      );
    },
    async transform(src, id) {
      if (!filter(id)) {
        return;
      }
      try {
        const componentDocs = docGenParser.parseWithProgramProvider(
          id,
          () => tsProgram
        );
        if (!componentDocs.length) {
          return null;
        }
        return generateDocgenCodeBlock({
          filename: id,
          source: src,
          componentDocs,
          ...generateOptions
        });
      } catch (e) {
        return src;
      }
    },
    async handleHotUpdate() {
      tsProgram = await getProgram(config, tsProgram);
    }
  };
}

module.exports = reactDocgenTypescript;
