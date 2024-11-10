import {defineConfig} from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    'tailwind.config.ts',
    'src/index.css'
  ],
  minify: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
});
