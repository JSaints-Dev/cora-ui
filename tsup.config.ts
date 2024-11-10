import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
});
