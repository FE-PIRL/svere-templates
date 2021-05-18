import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import pkg from '../svelte-shareable-component/package.json';
import typescript from '@rollup/plugin-typescript';
import { scss } from 'svelte-preprocess';

const name = pkg.name;
export default {
  external: ['svelte'],
  input: 'src/components/index.ts',
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'umd', name, sourcemap: true },
  ],
  plugins: [
    svelte({
      preprocess: [
        scss({
          /** options */
        }),
      ],
      emitCss: false,
    }),
    typescript({ sourceMap: true }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
  ],
};
