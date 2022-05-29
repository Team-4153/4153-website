/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@ericz1803/react-google-calendar"
]);

module.exports = withTM({
  // your custom config goes here
  images: {
    domains: ['socialistmodernism.com']
  },
});
