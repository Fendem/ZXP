import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({
    mode: 'serverless', // Enable serverless functions on Vercel
  }),
  output: 'server', // Explicitly set Astro to server-side rendering (SSR)
});
