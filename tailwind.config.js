const tailwindMobile = require('tailwind-mobile/config');

// wrap config with tailwindMobile config
module.exports = tailwindMobile({
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
});
