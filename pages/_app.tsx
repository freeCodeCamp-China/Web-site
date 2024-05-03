import { configure } from 'mobx';
import { enableStaticRendering, observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Image } from 'react-bootstrap';

import { MainNavigator } from '../components/MainNavigator';
import { SocialIconBar } from '../components/SocialIconBar';
import { isServer } from '../models/Base';
import { i18n } from '../models/Translation';

configure({ enforceActions: 'never' });

enableStaticRendering(isServer());

const { t } = i18n;

const AppShell = observer(({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <MainNavigator />

    <div className="pt-2">
      <Component {...pageProps} />
    </div>

    <footer className="flex-fill d-flex flex-wrap justify-content-around align-items-center border-top py-4">
      <a
        className="d-flex justify-content-center align-items-center"
        href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('powered_by')}
        <span className="mx-2">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>

      <SocialIconBar
        size="2x"
        github="https://github.com/freeCodeCamp-China"
        twitter="https://twitter.com/freeCodeCampZH"
        youtube="https://www.youtube.com/@freecodecampchinese"
        bilibili="https://space.bilibili.com/335505768/"
        podcast="https://freecodecamp-in-chinese.transistor.fm/"
      />
    </footer>
  </>
));

export default AppShell;
