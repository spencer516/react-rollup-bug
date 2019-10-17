import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import serve from 'rollup-plugin-serve';

const treeshake = process.env.TREESHAKE === 'true';

export default {
  input: "main.jsx",
  treeshake,
  output: {
    name: 'myapp',
    file: 'dist/vendor.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx']
    }),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    commonjs(),
    babel({
      babelrc: false,
      exclude: ['node_modules/**'],
      presets: ['@babel/react'],
      plugins: []
    }),
    serve()
  ]
};
