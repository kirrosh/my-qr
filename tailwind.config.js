const tailwindMobile = require('tailwind-mobile/config')

// wrap config with tailwindMobile config
module.exports = tailwindMobile({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'page-ios-light': '#efeff4',
        'page-ios-dark': '#212121',
        secondary: '#457b9d',
      },
    },
  },
  extend: {
    colors: {
      'page-ios-light': '#efeff4',
      'page-ios-dark': '#212121',

      secondary: '#457b9d',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
