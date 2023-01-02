/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#D9E0EC',
        darkGray: '#3A3A3A',
        lightGray: '#dcdcdc33',
        primaryText: '#565656',
        lightText: '#696969',
        success: '#00AC4F',
        lightSuccess: '#14C8B0',
        danger: '#FF002E',
        info: '#220970',
        primaryBlue: '#3D00B7',
      },
      width: {
        themeWidth: '1446px'
      },
    },
  },
  plugins: [],
}
