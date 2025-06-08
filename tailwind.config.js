/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0e6ed',
          200: '#c1ccd9',
          300: '#a2b2c5',
          400: '#8398b1',
          500: '#667ea3',
          600: '#506586',
          700: '#40526d',
          800: '#36465c',
          900: '#30394d',
        },
        accent: {
          500: '#ff7e19',
          600: '#ed5e09',
          700: '#c4410b',
        },
        journal: {
          50: '#f7f7f5',
          100: '#e9e8e3',
          700: '#62584e',
          800: '#534a42',
        },
      },
      fontFamily: {
        'sans': ['"Source Sans 3"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'mono': ['"Courier Prime"', 'monospace'],
      },
    },
  },
  plugins: [],
};