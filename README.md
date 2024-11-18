# Cora UI Component Library

Essa é uma biblioteca de componentes utilizada para o teste de Front-end da empresa Cora. O objetivo é testar a capacidade de desenvolvimento e configuração de uma biblioteca de UI para produção e desenvolvimento de componentes.

## Tecnologias Utilizadas

- TailwindCSS
- ReactJS
- Storybook
- TSUP
- Semantic Release
- GitHub Actions

## Instalação

### Aplicação sem TailwindCSS

1. Instale a biblioteca:

    ```sh
    npm install @jsaints-dev/cora-ui
    ```

2. No seu arquivo de estilo global, adicione no início do arquivo:

    ```css
    @import "@jsaints-dev/cora-ui/styles.css";
    ```

### Aplicação com TailwindCSS

1. Instale a biblioteca:

    ```sh
    npm install @jsaints-dev/cora-ui
    ```

2. Instale o TailwindCSS, PostCSS e Autoprefixer:

    ```sh
    npm install -D tailwindcss postcss autoprefixer
    ```

3. Inicialize o TailwindCSS:

    ```sh
    npx tailwindcss init -p
    ```

4. Adicione a importação no início do arquivo de estilo global, por exemplo, em `src/index.css`:

    ```css
    @import "@jsaints-dev/cora-ui/styles.css";
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. Configure o arquivo `tailwind.config.ts`:

    ```ts
    import type { Config } from 'tailwindcss';
    import twPreset from '@jsaints-dev/cora-ui/tailwind-preset';

    const config = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      corePlugins: {
        preflight: false,
      },
      plugins: [],
      presets: [twPreset],
    } satisfies Config;

    export default config;
    ```
