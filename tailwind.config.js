const tailwindMobile = require('tailwind-mobile/config');

// wrap config with tailwindMobile config
module.exports = tailwindMobile({
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'page-ios-light': '#efeff4',
                'page-ios-dark': '#212121',
                primary: {
                    light: '#480ca8',
                    DEFAULT: '#480ca8',
                    dark: '#480ca8'
                },
                secondary: '#f72585'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
});
