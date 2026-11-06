import assert from 'node:assert/strict';
import test from 'node:test';
import { markdownToHtml, mdxToJs } from 'satteri';
import { satteriKatex } from './satteri-katex.mjs';

const options = { features: { math: true }, mdastPlugins: [satteriKatex] };

for (const [name, source, display] of [
  ['inline math', String.raw`A fraction: $\frac{1}{2}$.`, false],
  ['display math', String.raw`$$
\frac{1}{2}
$$`, true],
  ['math fence', '```math\n\\frac{1}{2}\n```', true],
]) {
  test(`${name} renders in Markdown and compiles in MDX`, () => {
    const { html } = markdownToHtml(source, options);
    assert.match(html, /class="katex"/);
    assert.match(html, /<mfrac>/);
    assert.match(html, /<annotation encoding="application\/x-tex">\\frac\{1\}\{2\}<\/annotation>/);
    assert.equal(html.includes('class="katex-display"'), display);
    const { code } = mdxToJs(source, options);
    assert.match(code, /katex-mathml/);
    assert.match(code, /mfrac/);
  });
}

test('code examples and escaped currency remain literal', () => {
  const source = '`$x$`\n\n```tex\n\\frac{1}{2}\n```\n\nPrice: \\$50.';
  const { html } = markdownToHtml(source, options);
  assert.doesNotMatch(html, /class="katex"/);
  assert.match(html, /<code>\$x\$<\/code>/);
  assert.match(html, /Price: \$50/);
});

test('invalid formulas fail compilation instead of silently displaying source', () => {
  assert.throws(() => markdownToHtml('$\\notARealCommand{x}$', options), /Undefined control sequence/);
});
