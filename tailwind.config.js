/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.html',
    './utils/**/*.js', 
    './src/**/*.css'   
  ],
  theme: {
    extend: {
      fontFamily: {
        'mlight': ['Matter-Light'],
        'head': ['Head'],
        'gallery': ['Gallery'],
        'mori': ['Mori'],
      },
    },
  },
  plugins: [],
}
