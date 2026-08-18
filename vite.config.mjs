import { defineConfig } from 'vite';

// GitHub Pages serves project sites from /<repository-name>/, not the domain root.
// Relative asset paths work both there and in local previews.
export default defineConfig({
  base: './',
});
