/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html','./dist/projects/*.html','./dist/about/*.html','./dist/services/*.html','./dist/contact/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'mlight': ['Matter-Light'],
        'head': ['Head'],
        'gallery': ['Gallery'],
        'mori': ['Mori']
      },
    },
  },
  plugins: [],
}

