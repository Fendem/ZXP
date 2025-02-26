import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({
    mode: 'serverless', // Make sure you're using the serverless mode
  }),
  output: 'server',
});
