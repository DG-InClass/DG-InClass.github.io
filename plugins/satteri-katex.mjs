import katex from 'katex';
import { defineMdastPlugin } from 'satteri';

/** Render math during compilation, with no browser-side JavaScript. */
function renderMath(value, displayMode) {
  const html = katex.renderToString(value, {
    displayMode,
    output: 'htmlAndMathml',
    throwOnError: true,
    trust: false,
  });

  // Sätteri re-parses raw replacements. Preserve TeX backslashes in MathML
  // annotations and keep braces in generated markup out of MDX expressions.
  return { raw: html.replaceAll('\\', '\\\\'), mdxExpressions: false };
}

export const satteriKatex = defineMdastPlugin({
  name: 'satteri-katex',
  math(node) {
    return renderMath(node.value, true);
  },
  inlineMath(node) {
    return renderMath(node.value, false);
  },
  code(node) {
    if (node.lang === 'math') return renderMath(node.value, true);
  },
});
