/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/]
    }
    // other next config
});
// module.exports = {
//     reactStrictMode: true
// };
