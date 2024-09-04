import setPWA from 'next-pwa';
// @ts-ignore
import withLess from 'next-with-less';

const { NODE_ENV, CI } = process.env,
  withPWA = setPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: NODE_ENV === 'development',
  });

export default withLess(withPWA({ output: CI ? 'standalone' : undefined }));
