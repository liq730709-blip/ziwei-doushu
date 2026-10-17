/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === '1';
const basePath = isPages ? '/ziwei-doushu' : '';
// Cloudflare Worker URL for AI APIs when static-exported to GitHub Pages.
// Override at build time: NEXT_PUBLIC_API_BASE=https://ziwei-api.<subdomain>.workers.dev
const apiBase =
  process.env.NEXT_PUBLIC_API_BASE ||
  (isPages ? 'https://ziwei-api.PLACEHOLDER.workers.dev' : '');

const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  // GITHUB_PAGES=1 时输出纯静态站点（GitHub Pages 部署用），本地开发不受影响
  ...(isPages
    ? {
        output: 'export',
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
        images: { unoptimized: true },
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
          NEXT_PUBLIC_API_BASE: apiBase,
        },
      }
    : {
        env: {
          NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE || '',
        },
      }),
};

module.exports = nextConfig;
