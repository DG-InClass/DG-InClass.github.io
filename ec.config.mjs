import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCodeblocks } from 'starlight-codeblocks/expressive-code';
import vite from './grammars/vite.mjs';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers(), pluginCodeblocks()],
  shiki: { langs: [vite] },
  customizeTheme(theme) {
    const dark = theme.type === 'dark';
    const foreground = theme.colors['editor.foreground'] ?? (dark ? '#d4d4d4' : '#24292e');
    const green = dark ? '#00d787' : '#007a43';
    const cyan = dark ? '#00cfff' : '#006b85';
    theme.settings.push(
      { scope: 'vite.banner', settings: { foreground: green, fontStyle: 'bold' } },
      { scope: 'vite.green', settings: { foreground: green } },
      { scope: 'vite.url', settings: { foreground: cyan } },
      { scope: 'vite.tag', settings: { foreground: cyan, fontStyle: 'bold' } },
      { scope: 'vite.muted', settings: { foreground: dark ? '#858585' : '#626262' } },
      { scope: 'vite.number', settings: { foreground: dark ? '#ffff00' : '#805500' } },
      { scope: 'vite.bold', settings: { foreground, fontStyle: 'bold' } },
      { scope: 'vite.normal', settings: { foreground } },
    );
  },
  defaultProps: {
    // Disable line numbers by default
    showLineNumbers: false,
    overridesByLang: { vite: { frame: 'terminal' } },
    // But enable line numbers for certain languages
    // overridesByLang: {
    //   'js,ts,html': {
    //     showLineNumbers: true,
    //   },
    // },
  },
}
