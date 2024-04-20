import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'needus-black': 'rgba(25, 25, 25, 1)',
        'needus-light-grey': 'rgba(241, 241, 241, 1)',
        'needus-grey': 'rgba(111, 111, 111, 1)',
        'needus-gray': 'rgba(47, 51, 58, 1)',
        'needus-red': 'rgba(194, 41, 0, 1)',
        'needus-light-red': 'rgba(231, 60, 23, 1)',
        'needus-dark-red': 'rgba(194, 41, 0, 1)',
        'needus-green': 'rgba(18, 160, 92, 1)',
        'needus-orange': 'rgba(255, 153, 0, 1)',
        'needus-purple': 'rgba(127, 124, 246, 1)',
      },
      minWidth: {
        xs: '390px',
      },
      maxWidth: {
        '8xl': '1440px'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        inconsolata: ['var(--font-inconsolata)'],
      },
    },
  },
  plugins: [],
};
export default config;
