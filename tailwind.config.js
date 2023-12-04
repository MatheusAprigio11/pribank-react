/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      poppins : ['Poppins', 'sans-serif'],
      lexend : ['Lexend', 'sans-serif'],
    },
    fontSize:{
      less : '0.5rem',
      sm: '0.8rem',
      smbs: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    backgroundImage:{
      'heroImg': "url('src/assets/images/banner.png')",
      'logo-white': "url('src/assets/images/banner.png')",
      'gradient-to-b': 'linear-gradient(to bottom, #1f1f1f, #000)',
    },
  plugins: [],
  }
}
