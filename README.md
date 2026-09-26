# Aidar Abdykaiymov — Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Motion, and Bun.

## Requirements

- Bun 1.1.17 or later

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000.

## Quality checks

```sh
bun run lint
bun run typecheck
bun run build
```

Biome is the sole formatter and linter. GitHub Pages deployment uses Bun 1.1.17 and the checked-in `bun.lockb`.
