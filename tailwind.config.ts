import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'primary-dark': 'var(--text-primary-dark)',
        'primary-light': 'var(--text-primary-light)',
        secondary: 'var(--text-secondary)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        accent: 'var(--border-accent)',
      },
      gridTemplateColumns: {
        5: 'repeat(5, minmax(0, 280px))',
        4: 'repeat(4, minmax(0, 280px))',
        3: 'repeat(3, minmax(0, 280px))',
      },
      padding: {
        19: '4.75rem',
      },
      screens: {
        xs: '380px',
      },
      backgroundImage: {
        background1: "url('../public/images/misc/background1.jpg')",
        background2: "url('../public/images/misc/background2.png')",
        background3: "url('../public/images/misc/background3.jpg')",
        all: "url('../public/images/misc/all.jpg')",
        single: "url('../public/images/misc/single.png')",
      },
      accentColor: {
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
} satisfies Config;
