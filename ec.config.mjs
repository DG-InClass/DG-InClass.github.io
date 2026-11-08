import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCodeblocks } from 'starlight-codeblocks/expressive-code';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers(), pluginCodeblocks()],
  defaultProps: {
    // Disable line numbers by default
    showLineNumbers: false,
    // But enable line numbers for certain languages
    // overridesByLang: {
    //   'js,ts,html': {
    //     showLineNumbers: true,
    //   },
    // },
  },
}
