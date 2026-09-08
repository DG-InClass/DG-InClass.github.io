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
