import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-jss'
  ],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    cleanup()
  ]
}
