/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary' : '#53BD95',
        'primary-dark' : '#2C785C',
      },
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
