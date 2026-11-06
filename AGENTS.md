# Notes for AI Agents

Guidance for AI coding agents (Claude Code, Copilot, Cursor, etc.) working in this
repository. This is a [Starlight](https://starlight.astro.build/) documentation site;
content lives in `src/content/docs/` as `.md` / `.mdx` files.

## Version control

- **This project uses trunk-based development.** Commit and push directly to `main`.
  Do not create a feature branch or open a pull request for routine work.
- Only use a branch when the maintainer explicitly asks, or for genuinely risky
  experiments that shouldn't touch `main` until proven.

## Links

- **External links must open in a new tab.** Whenever you link to another website
  (github.com, docs, tools, etc.), write it as a raw anchor with `target="_blank"`
  rather than a Markdown link:

  ```mdx
  <a href="https://github.com" target="_blank">GitHub</a>
  ```

  This is general policy for every page on this site. Do not use the
  `[text](https://example.com)` Markdown form for external URLs.

- **Internal links stay as Markdown** and use root-relative, trailing-slash paths,
  e.g. `[Assignments via GitHub](/guides/assignments/)`. They should not open in a
  new tab.

## Images in MDX

- Import the `Image` component from `astro:assets` (not `astro:components`).
- Import each image as a module and pass it to `<Image src={...} alt="..." />`.

## Development

When starting the dev server, use background mode:

```sh
pnpm exec astro dev --background
```

Manage the background server with:

```sh
pnpm exec astro dev stop
pnpm exec astro dev status
pnpm exec astro dev logs
```

## Documentation

Full documentation: <a href="https://docs.astro.build" target="_blank">Astro documentation</a>.

Consult these guides before working on related tasks:

- <a href="https://docs.astro.build/en/guides/routing/" target="_blank">Adding pages, dynamic routes, or middleware</a>
- <a href="https://docs.astro.build/en/basics/astro-components/" target="_blank">Working with Astro components</a>
- <a href="https://docs.astro.build/en/guides/framework-components/" target="_blank">Using React, Vue, Svelte, or other framework components</a>
- <a href="https://docs.astro.build/en/guides/content-collections/" target="_blank">Adding or managing content</a>
- <a href="https://docs.astro.build/en/guides/styling/" target="_blank">Adding styles or using Tailwind</a>
- <a href="https://docs.astro.build/en/guides/internationalization/" target="_blank">Supporting multiple languages</a>
