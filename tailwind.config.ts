import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-1': '#d7c5ab',
        'dark-2': '#5c4f3a',
        'light-1': '#fffdf4',
        'light-2': '#ece5d6',
        'light-3': '#ebe6da',
        'light-4': '#ceba9b',
      }
    },
  },
  plugins: [],
}
export default config
