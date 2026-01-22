// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cl.flujooficial.com',
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())]
  }
});
