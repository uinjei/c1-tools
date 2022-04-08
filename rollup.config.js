import babel from '@rollup/plugin-babel';
import babelPluginTransformRuntime from '@babel/plugin-transform-runtime';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';

export default {
  input: 'src/app.js',
  plugins: [
    resolve({mainFields: ['module','main']}),
    commonjs({
      include: ["node_modules/**"]
    }),
    json(),
    postcss({
      plugins: [simplevars()],
      extensions: ['.css', '.scss', '.sass'],
    }),
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: [babelPluginTransformRuntime]
    }),
    copy({
        "node_modules/@fortawesome/fontawesome-free/webfonts": "./resources",
        verbose: true
    }),
    copy({
      targets: [
        { src: ['node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'], dest: 'resources/webfonts' },
      ]
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
    name: 'heresy'
  }
};