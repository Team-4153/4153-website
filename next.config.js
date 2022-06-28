/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@ericz1803/react-google-calendar"
]);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withTM(withBundleAnalyzer({
  // your custom config goes here
}));
