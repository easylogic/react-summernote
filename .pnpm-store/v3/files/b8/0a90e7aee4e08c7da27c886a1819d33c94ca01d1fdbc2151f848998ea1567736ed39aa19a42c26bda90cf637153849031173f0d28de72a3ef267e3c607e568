import * as path from 'path';
import glob from 'glob-promise';

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
  const { getTSConfigFile } = await import('./chunks/typescript.mjs');
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
      path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath)
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
      const { getGenerateOptions } = await import('./chunks/options.mjs');
      generateDocgenCodeBlock = (await import('./chunks/generate.mjs')).generateDocgenCodeBlock;
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

export { reactDocgenTypescript as default };
