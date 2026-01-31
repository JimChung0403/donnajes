# Donna JLS Website

Lifestyle-focused product site for JEROSSE. Built with Next.js and exported as static files for Firebase Hosting.

## Local Development

```bash
npm install
npm run dev
```

## Static Export

```bash
npm run export
```

The static output will be generated in `out/`.

## Firebase Hosting

```bash
npm run deploy:firebase
```

## Notes

- Hosting uses `out/` as the public directory.
- Product pages are statically generated.
