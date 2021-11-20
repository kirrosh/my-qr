const tailwindMobile = require('tailwind-mobile/config');

// wrap config with tailwindMobile config
module.exports = tailwindMobile({
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'page-ios-light': '#fff',
                'page-ios-dark': '#000',
                primary: {
                    light: '#4361ee',
                    DEFAULT: '#4361ee',
                    dark: '#4361ee'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
});
