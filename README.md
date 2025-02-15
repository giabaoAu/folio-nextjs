# Web Portfolio

This is a **personal web portfolio** built using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).\
The project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🚀 Getting Started

To start the development server, run:

```bash
# Ensure Node.js is installed
npm run dev  # Using npm
# or
yarn dev  # Using Yarn
# or
pnpm dev  # Using pnpm
# or
bun dev  # Using Bun
```

Once running, open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.\
Edits made to `app/page.tsx` will auto-update in development mode.

---

## 📌 Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** `acerternityUI`
- **Theme Management:** `next-themes` (installed via npm)
- **Dark Mode:** Implemented using [`shadcn/ui`](https://ui.shadcn.com)

---

## 📂 Project Structure

```
/web-portfolio
│── /app
│   ├── page.tsx         # Main page
│   ├── layout.tsx       # Layout configuration
│── /components          # Reusable UI components
│── /data
│   ├── index.ts         # Static data (e.g., portfolio projects, skills, etc.)
│── /styles
│   ├── globals.css      # Global styles
│── public               # Static assets (images, icons, etc.)
│── package.json         # Dependencies
│── README.md            # Project documentation
```

---

## 🎨 Styling & Design

- Tailwind CSS is used for responsive and utility-based styling.
- A gradient effect for `GridBentoItem` is sourced from [cssgradient.io](https://cssgradient.io).
- Custom fonts are optimized using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), specifically [Geist](https://vercel.com/font).

---

## 🔧 Additional Notes

1. **Static Data Management:**

   - Instead of hardcoding arrays inside TypeScript components, static data (such as projects and skills) is managed in `/data/index.ts`.

2. **React Version Compatibility:**

   - To prevent conflicts with React 19, install React 18 using:
     ```bash
     npm install react@18 react-dom@18 --legacy-peer-deps
     ```

3. **Error & Performance Monitoring:**

   - `Sentry` integration is planned but currently postponed due to conflicts with `three/fiber`.

---

## 📝 Key Learnings

1. Pages are modified inside `app/page.tsx`.
2. Components are stored in the `components` folder for modularity.
3. Static arrays for data (like portfolio projects) should be stored in `data/index.ts` instead of inside components.

---

## 🐝 License

This project is licensed under the **MIT License**. Feel free to use and customize it for your own portfolio!

---

Made with ❤️ using **Next.js & Tailwind CSS** 🚀
