// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://dg-inclass.github.io',

    integrations: [
        starlight({
            title: 'My Docs',
            customCss: [
                // Path to your Tailwind base styles:
                './src/styles/global.css',
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dg-inclass/dg-inclass.github.io' }],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});