import { spawnSync } from 'node:child_process';

import withSerwistInit from '@serwist/next';
// @ts-expect-error No types available
import withLess from 'next-with-less';

const { CI } = process.env,
  { stdout, stderr } = spawnSync('git', ['rev-parse', 'HEAD'], {
    encoding: 'utf8',
  });
const { GITHUB_SHA, VERCEL_GIT_COMMIT_SHA } = process.env;
const revision =
  stdout.trim() || VERCEL_GIT_COMMIT_SHA || GITHUB_SHA || crypto.randomUUID();

if (!stdout.trim())
  console.warn(
    `Falling back to random UUID for Serwist revision: ${
      stderr.trim() || 'Git revision is unavailable'
    }`,
  );

const withSerwist = withSerwistInit({
  swSrc: 'service-worker.ts',
  swDest: 'public/sw.js',
  additionalPrecacheEntries: [{ url: '/', revision }],
});

const rewrites = async () => ({
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

export default withSerwist(
  withLess({
    output: CI ? 'standalone' : undefined,
    transpilePackages: [
      '@serwist/next',
      '@swc/helpers',
      'idea-react',
      'iterable-observer',
      'koajax',
      'marked',
      'mobx-github',
      'mobx-i18n',
      'mobx-restful',
      'mobx-restful-table',
      'react-bootstrap-editor',
      'web-utility',
    ],
    rewrites,
  }),
);
