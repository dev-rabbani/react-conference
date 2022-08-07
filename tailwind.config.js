const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1320px',
      },
      colors: {
        primary: '#FFC93E',
        'primary-hover': '#FFC93E',
        secondary: '#725114',
        'secondary-hover': '#725114',
        teritory: '#111D5E',
        'teritory-hover': '#111D5E',
        gray: '#FBFBFB',
        title: '#0A142F',
        body: '#000000',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1em' }],
        sm: ['0.875rem', { lineHeight: '1.25em' }],
        sm: ['0.9375rem', { lineHeight: '1.25em' }],
        base: ['1rem', { lineHeight: '2em' }],
        lg: ['1.125rem', { lineHeight: '1.75em' }],
        xl: ['1.25rem', { lineHeight: '1.2em' }],
        '2xl': ['1.5rem', { lineHeight: '2em' }],
        '2xl': ['1.75rem', { lineHeight: '2.25em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5em' }],
        '5xl': ['3rem', { lineHeight: '1.2em' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['8.75rem', { lineHeight: '1.2em' }],
      },
    },
  },
  plugins: [],
}