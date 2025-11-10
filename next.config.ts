import { NextConfig } from 'next';
import setPWA from 'next-pwa';
// @ts-expect-error No types available
import withLess from 'next-with-less';

const { NODE_ENV, CI } = process.env,
  withPWA = setPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: NODE_ENV === 'development',
  });

const rewrites: NextConfig['rewrites'] = async () => ({
  beforeFiles: [
    {
      source: '/proxy/github.com/:path*',
      destination: 'https://github.com/:path*',
    },
    {
      source: '/proxy/raw.githubusercontent.com/:path*',
      destination: 'https://raw.githubusercontent.com/:path*',
    },
  ],
  afterFiles: [],
  fallback: [],
});

export default withLess(
  withPWA({ output: CI ? 'standalone' : undefined, rewrites }),
);
