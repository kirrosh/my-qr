const konstaConfig = require('konsta/config')

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        'page-ios-light': '#efeff4',
        'page-ios-dark': '#212121',
        // primary: {
        //   light: '#ff5676',
        //   DEFAULT: '#ff2d55',
        //   dark: '#ff0434',
        // },
        secondary: '#457b9d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
