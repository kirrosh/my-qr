if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/252f366e-28d70fa9ba516ad2.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/852-2585f0ec1714dddf.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/main-39ae249704884a9f.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/pages/_app-5333e484aff0c29d.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/pages/index-030ab049d98be834.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/css/184a6c448a0a3052.css",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/css/d171ff559a2ab40f.css",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/ywyjDZRo4VgZfMq1tnkYf/_buildManifest.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/ywyjDZRo4VgZfMq1tnkYf/_middlewareManifest.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/_next/static/ywyjDZRo4VgZfMq1tnkYf/_ssgManifest.js",revision:"ywyjDZRo4VgZfMq1tnkYf"},{url:"/favicon.ico",revision:"98696ac9b247bc26a6b7577bde2c97fe"},{url:"/icons/icon-128x128.png",revision:"4b370b1b6cf26f8b9cb2341bac93ac55"},{url:"/icons/icon-144x144.png",revision:"a12b8b45f2762896a74d9e4f3d2b0b2d"},{url:"/icons/icon-152x152.png",revision:"dee9e7cd3cdf73fa98ebe6747ba8e051"},{url:"/icons/icon-192x192.png",revision:"9b4f65976a09a5ec992c7689938756da"},{url:"/icons/icon-384x384.png",revision:"3e51ee61b48ad3f1d979e7732327e82b"},{url:"/icons/icon-48x48.png",revision:"31c50597fbdd7358df2de2a2313e61f5"},{url:"/icons/icon-512x512.png",revision:"0603bb9bda8ea74a35b0c8e6b3c00725"},{url:"/icons/icon-72x72.png",revision:"74ccac8e7af3e01b588902b15b846be2"},{url:"/icons/icon-96x96.png",revision:"16d5db5a0aa0183805e5ad29d748c605"},{url:"/manifest.json",revision:"0e0418fe938e398c2b7e653f7b7d4fa6"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
