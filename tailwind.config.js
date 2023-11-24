/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        bromny: ['var(--font-bromny)']
      },
      colors: {
        'loovi-blue': '#5a78ff',
        'type-blue': '#514277',
        'dark-blue': '#3d3245',
        'white': '#f4f4f1',
        'violet': '#9072fd',
        'dusty-violet': '#6759a8',
        'light-violet': '#54dff8',
        'turquooise': '#45fdd6',
      },
      maxWidth: {
        grid: '77.5rem'
      }
    },
    screens: {
      '@tablet': '640px',
      '@laptop': '1024px',
      '@desktop': '1280px',
    }
  },
  plugins: [],
}