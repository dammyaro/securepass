import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://dammyaro.github.io/securepass',
  base: '/securepass',
  integrations: [
    starlight({
      title: 'SecurePass Documentation',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/dammyaro/securepass',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Setup', link: '/guides/setup/' },,
            { label: 'Contributing', link: '/guides/contributing/' },,
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'API', link: '/reference/api/' },,
          ],
        },
      ],
    }),
  ],
});