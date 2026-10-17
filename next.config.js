/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === '1';
const basePath = isPages ? '/ziwei-doushu' : '';

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
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {}),
};

module.exports = nextConfig;
