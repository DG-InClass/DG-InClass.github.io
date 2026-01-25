// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    site: 'https://dg-inclass.github.io',

    integrations: [
        starlight({
            title: 'DG In-Class',
            customCss: [
                // Path to your Tailwind base styles:
                './src/styles/global.css',
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dg-inclass/dg-inclass.github.io' }],
            // sidebar: [
            //     {
            //         label: 'Guides',
            //         items: [
            //             // Each item here is one entry in the navigation menu.
            //             { label: 'Example Guide', slug: 'guides/example' },
            //         ],
            //     },
            //     {
            //         label: 'Reference',
            //         autogenerate: { directory: 'reference' },
            //     },
            // ],
            plugins: [
                starlightSidebarTopics([
                    {
                        label: 'About',
                        link: '/about/',
                        icon: 'open-book',
                        items: [
                            'about',
                            'about/lab-setup',
                            'about/lab-updates',
                            'about/roadmap',
                            'about/academic-integrity',
                        ],
                    },
                    {
                        label: 'Co-Requisites',
                        link: '/general/',
                        icon: 'laptop',
                        items: [
                            'general',
                            'general/quality',
                        ]
                    },
                    {
                        label: 'SDEV-1150',
                        id: 'sdev1150',
                        link: '/sdev-1150/',
                        icon: 'information',
                        items: ['sdev-1150',
                            { 
                                label: "Lessons", autogenerate: { directory: 'sdev-1150/lessons' }
                            }
                        ],
                    },
                    {
                        label: 'SDEV-2150',
                        id: 'sdev2150',
                        link: '/sdev-2150/',
                        icon: 'information',
                        items: ['sdev-2150',
                            { label: "References", items: ['sdev-2150/qna']},
                            {
                                label: "Lessons", autogenerate: { directory: 'sdev-2150/lessons' }
                            }
                        ],
                    },
                    {
                        label: 'DMIT Courses',
                        id: 'dmit',
                        link: '/dmit/',
                        icon: 'information',
                        items: ['dmit',
                            { 
                                label: "DMIT-2008", items: ['dmit/dmit-2008']
                            },
                            { 
                                label: "CPSC-1520", items: ['dmit/cpsc-1520']
                            }
                        ],
                    },
                ],
                {
                    exclude: ['/guides/*','/reference/*', '/blog/**/*'],
                },
                ),
            ]
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});