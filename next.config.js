/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    reactStrictMode: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
    pwa: {
        dest: 'public'
    }
    // other next config
});
// module.exports = {
//     reactStrictMode: true
// };
