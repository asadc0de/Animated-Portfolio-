/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html','./dist/projects/*.html','./dist/about/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Main'],
        'head': ['Head'],
        'mregular': ['Matter-Regular'],
        'mlight': ['Matter-Light'],
        'gallery': ['Gallery'],
        'mori': ['Mori'],
        // 'robotoflex': ['Roboto-Flex']
      },
    },
  },
  plugins: [],
}

