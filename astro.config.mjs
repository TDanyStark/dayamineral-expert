// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/dayamineral-expert',
  outDir: 'apps/abbott/dayamineral-expert',
  vite: {
    plugins: [tailwindcss()]
  }
});