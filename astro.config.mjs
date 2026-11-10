// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightQuiz from 'starlight-quiz';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriKatex } from './plugins/satteri-katex.mjs';
import codeblocks from 'starlight-codeblocks';

import tailwindcss from '@tailwindcss/vite';
import starlightSidebarTopics from 'starlight-sidebar-topics';

import mermaid from 'astro-mermaid';

import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://dg-inclass.github.io',
    markdown: {
        processor: satteri({
            features: { math: true },
            mdastPlugins: [satteriKatex],
        }),
    },
    integrations: [
        clerk(),
        mermaid(),
        starlight({
            title: 'DG In-Class',
            pagefind: {
              mergeIndex: [
                // Optional: slightly de-prioritize imported results vs local results
                // indexWeight: 0.9,
                { bundlePath: 'https://dgilleland.github.io/CPSC-1520/pagefind' },
                // indexWeight: 0.9,
                { bundlePath: 'https://dgilleland.github.io/DMIT-2008/pagefind' },
                // Add this later if/when the personal site also publishes Pagefind
                // {
                //   bundlePath: 'https://dgilleland.github.io/pagefind',
                //   indexWeight: 0.7,
                // },
              ],
            },
            customCss: [
                'katex/dist/katex.min.css',
                // Path to your Tailwind base styles:
                './src/styles/global.css',
            ],
            components: {
                SocialIcons: './src/components/starlight/AuthSocialIcons.astro',
                MarkdownContent: './src/components/starlight/ProtectedMarkdownContent.astro',
            },
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
            //         items: [{ autogenerate: { directory: 'reference' } }]
            //     },
            // ],
            plugins: [
                starlightSidebarTopics([
                    {
                        label: 'Start Here',
                        link: '/about/',
                        icon: 'open-book',
                        items: [
                            { 
                                label: "Start Here", 
                                items: [
                                    'about',
                                    'about/folders',
                                    'about/roadmap',
                                    'about/colophon',
                                ]
                            },
                            { 
                                label: "Labs/Assignments", 
                                items: [
                                    'about/lab-setup',
                                    'about/lab-updates',
                                    'about/academic-integrity',
                                ]
                            }
                        ],
                    },
                    {
                        label: 'Tools',
                        link: '/general/',
                        icon: 'laptop',
                        items: [
                            { label: 'Generally Expected', items: [{ autogenerate: { directory: 'general' }} ] },
                        ]
                    },
                    {
                        label: 'Classes',
                        id: 'classes',
                        link: '/classes/',
                        icon: 'information',
                        items: [
                            
                            {
                                label: 'SDEV-1150 (JavaScript)',
                                collapsed: true,
                                items: [
                                    { label: "About SDEV-1150", items: ['sdev-1150','sdev-1150/qna']},
                                    { 
                                        label: "Lessons",
                                        items: [{ autogenerate: { directory: 'sdev-1150/lessons' } }]
                                    },
                                    {
                                        label: "Notes",
                                        items: [{ autogenerate: { directory: 'sdev-1150/notes'} }]
                                    },
                                ],
                            },
                            {
                                label: 'SDEV-2150 (React)',
                                collapsed: true,
                                items: [
                                    { label: "About SDEV-2150", items: ['sdev-2150','sdev-2150/qna']},
                                    {
                                        label: "Lessons",
                                        items: [{ autogenerate: { directory: 'sdev-2150/lessons' } }]
                                    },
                                    {
                                        label: "Notes",
                                        items: [{ autogenerate: { directory: 'sdev-2150/notes'} }]
                                    },
                                ],
                            },
                            {
                                label: 'DMIT Courses',
                                collapsed: true,
                                items: ['dmit',
                                    { 
                                        label: "DMIT-2008", items: [
                                            'dmit/dmit-2008',
                                            'dmit/dmit-2008-c3',
                                            'dmit/dmit-2008-c4',
                                            'dmit/dmit-2008-c5',
                                            'dmit/dmit-2008-c6',
                                            'dmit/dmit-2008-c7',
                                        ]
                                    },
                                    { 
                                        label: "CPSC-1520", items: ['dmit/cpsc-1520']
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        label: 'Coding',
                        id: 'coding',
                        link: '/coding/',
                        icon: 'information',
                        items: [
                            'coding',
                            { label: 'JavaScript/TypeScript', collapsed: true, items: [{ autogenerate: {directory: 'coding/js-ts'}}]},
                            { label: 'SQL', collapsed: true, items: [{ autogenerate: {directory: 'coding/sql'}}]},
                            { label: 'C#', collapsed: true, items: [{ autogenerate: {directory: 'coding/csharp'}}]},
                            { label: 'Logic & Problem Solving', collapsed: true, items: [{ autogenerate: {directory: 'coding/logic'}}]},
                        ]
                    },
                    {
                        label: 'Workshops',
                        id: 'workshops',
                        link: '/workshops/',
                        icon: 'information',
                        items: [
                            {
                                label: 'Workshop Resources',
                                items: [ 'workshops' ]
                            },
                            {
                                label: 'TDD',
                                items: [{ autogenerate: {directory: 'workshops/tdd' }}]
                            }
                        ]
                    },
                    {
                        label: 'Everything Else',
                        id: 'errata',
                        link: '/guides/',
                        icon: 'information',
                        items: [
                            {
                                label: 'Guides',
                                items: [{ autogenerate: { directory: 'guides' }} ] 
                            },
                            {
                                label: 'Reference',
                                items: [{ autogenerate: { directory: 'reference' }} ] 
                            },
                            {
                                label: 'Left Field',
                                items: [{ autogenerate: { directory: 'left-field' }} ]
                            },
                        ],
                    },
                ],
                {
                    exclude: ['/blog/**/*', '/coding/quote-me'],
                    topics: {
                        sdev1150: ['/sdev-1150/**'],
                        sdev2150: ['/sdev-2150/**'],
                        dmit: ['/dmit/**'],
                        errata: ['/guides/**', '/reference/**'],
                    },
                },
                ),
                codeblocks(),
                starlightQuiz(),
            ]
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
