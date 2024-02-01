/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  serverDependenciesToBundle: ['@starknet-react/core', '@starknet-react/chains'],
  future: {
    v2_routeConvention: true,
    v2_dev: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_errorBoundary: true,
  },
  serverModuleFormat: 'cjs',
}
