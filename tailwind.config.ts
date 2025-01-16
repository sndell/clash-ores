import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				first: 'url("/images/backgrounds/1.jpg")',
				second: 'url("/images/backgrounds/2.png")',
				third: 'url("/images/backgrounds/3.jpg")',
			},
			backgroundColor: {
				background: 'var(--background)',
			},
			textColor: {
				primary: 'var(--text-primary)',
				'primary-dark': 'var(--text-primary-dark)',
			},
			dropShadow: {
				xs: '0 2px 1px rgb(0, 0, 0)',
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
} satisfies Config;
