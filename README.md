# Papa Amadou Fall Portfolio

Professional portfolio for Papa Amadou Fall, positioned for bilingual technical support, IT support, SaaS support, help desk, and junior web support roles.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Static export for GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open the local route with the configured GitHub Pages base path:

```text
http://localhost:3000/PapaAmadouFall
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

The app is configured with:

```ts
output: "export"
basePath: "/PapaAmadouFall"
```

Build output is generated in `out/`. The `docs/` folder is used for GitHub Pages publishing from the repository.
