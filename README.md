# Bankersden Client

A React + TypeScript + Vite application with Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

The development server will proxy API calls to the production backend at `https://bankbackend-ygee.onrender.com`.

## Deployment

This project is configured for Vercel deployment with backend at `https://bankbackend-ygee.onrender.com`:

1. Connect your GitHub repo to Vercel
2. Vercel will auto-detect the framework and use the settings in `vercel.json`
3. API calls to `/api/*` are automatically proxied to the backend
4. Build command: `npm run build`
5. Output directory: `dist`

## Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- React Router for navigation
- ESLint for code quality

## Build

```bash
npm run build
npm run preview
```
