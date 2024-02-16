import { globSync } from 'glob';
const routes = globSync('./content/**/*.json').map((path) =>
  path.slice(7, -5).replace(/\d+\./g, '').replace(/\\/g, '/')
);

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/image', '@nuxt/content'],

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/ww-favicon.svg',
        },
      ],
    },
  },

  ssr: true,
  nitro: {
    preset: 'github_pages',
    prerender: {
      // crawlLinks: true,
      routes: [...routes],
    },
  },
});
