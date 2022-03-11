import babel from '@rollup/plugin-babel';
import babelPluginTransformRuntime from '@babel/plugin-transform-runtime';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
//import nested from 'postcss-nested';
//import cssnext from 'postcss-cssnext';
//import cssnano from 'cssnano';

export default {
  input: 'src/app.js',
  plugins: [
    resolve({mainFields: ['module','main']}),
    commonjs({
      include: ["node_modules/**"]
    }),
    postcss({
      plugins: [simplevars()],
      extensions: ['.css', '.scss', '.sass'],
    }),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: [babelPluginTransformRuntime]
    }),
    serve()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    exports: 'named',
    file: './resources/js/app.js',
    inlineDynamicImports: true,
    format: 'iife',
    name: 'neverland'
  }
};