# DG-InClass.github.io

> **Dan Gilleland's Supplemental In-Class Resource Website**
>
> To update, run the following or see [the Astro upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v5/)
>
> ```ps
> pnpm dlx @astrojs/upgrade
> ```

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
pnpm create astro@latest -- --template starlight
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧑‍🚀 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm check`           | Generate Astro types and type-check with TypeScript |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro sync` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

### Type checking

`pnpm check` runs `astro sync` followed by `tsc --noEmit --runExternalCode`.
The <a href="https://github.com/withastro/astro/tree/main/packages/language-tools/ts-content-mapper#usage" target="_blank">Astro content mapper</a>
lets TypeScript check `.astro` components directly. This experimental workflow
currently uses pinned versions of TypeScript (`7.1.0-beta`) and the mapper (`0.2.0`).
The `--runExternalCode` flag allows TypeScript to execute the configured mapper.

The pnpm package extension for `@astrojs/astro2tsx@0.1.3` supplies its missing
`@emnapi/runtime@1.11.3` dependency, matching its `@emnapi/core` version. Without
this correction, pnpm can select an incompatible runtime from another dependency
and the mapper fails to initialize. Reassess this extension when upgrading the converter.

Current limitation: the checker follows imported dependency source files and reports
internal virtual-module and type errors in Starlight, Clerk, and Expressive Code.
These diagnostics are not suppressed, so `pnpm check` currently exits unsuccessfully.
Starlight's i18next dependency also declares TypeScript 5/6 support and emits a peer
dependency warning with this beta. Recheck compatibility when updating these packages.

### Math formulas

Math is rendered at build time with KaTeX in Markdown and MDX. Use `$...$` for
inline formulas and `$$` on separate lines for display formulas:

```md
A fraction: $\frac{1}{2}$.

$$
\frac{1}{2}
$$
```

Fenced blocks labelled `math` also render as display formulas:

````md
```math
\frac{1}{2}
```
````

Use `tex` fences or inline code to show formula source without rendering it.
Escape literal dollar signs in prose as `\$`. Invalid formulas fail the build
with a KaTeX error. The renderer is in `plugins/satteri-katex.mjs`; run its tests
with `node --test plugins/satteri-katex.test.mjs`.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
