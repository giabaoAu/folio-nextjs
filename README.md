This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash | Win with nodejs installed
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## NOTE!

1. Some UI used from: `acerternityUI`
2. next-themes from: `npm website`
3. Dark-mode was implemented from `shadcn.ui`
4. Some object data can be changed in `data/index.ts`
5. Gradient used for the GridBentoItem taken from: `cssgradient.io`
6. To minimize React19 incompability issue -> npm install react18 reactDOM18 --legacy-peer-deps
7. `SENTRY` (PERFORMANCE & ERROR MONITOR) to be implemented later bc it messes with three/fiber

### New things I learned

1. Modify the web in page.tsx
2. Page's components are stored in the components folder
3. Instead of using a static array for a ts component for example
   -> we can create a folder "data" in ./ -> then index.ts and store the static array there
