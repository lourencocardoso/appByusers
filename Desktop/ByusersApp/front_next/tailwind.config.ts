import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'h-orange': '#EC5F34',
      'h-rose-500': '#DC7099',
      'h-violate-500': '#B3A2F1',
      'h-white-500': '#eeee',
      'h-black-500': '#3333',
      'h-sinze-500': '#dedede',
     }
    },
  },
  plugins: [ require('tailwind-scrollbar')],
}
export default config
