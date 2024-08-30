import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Degular', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      lightblue: '#03979C2B',
      sctblue: '#03979C',
      sctyellow: '#fbbf31',
      secondary: '#757575',
      yellowgradient: '#FBBF31',
    },
  },
  plugins: [],
};
export default config;
