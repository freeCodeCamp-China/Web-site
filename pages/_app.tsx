import { HTTPError } from 'koajax';
import { configure } from 'mobx';
import { enableStaticRendering, observer } from 'mobx-react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { Image } from 'react-bootstrap';

import { MainNavigator } from '../components/MainNavigator';
import { SocialIconBar } from '../components/SocialIconBar';
import { isServer } from '../models/Base';
import {
  createI18nStore,
  I18nContext,
  I18nProps,
  loadSSRLanguage,
} from '../models/Translation';

configure({ enforceActions: 'never' });

enableStaticRendering(isServer());

@observer
export default class CustomApp extends App<I18nProps> {
  static async getInitialProps(context: AppContext) {
    return {
      ...(await App.getInitialProps(context)),
      ...(await loadSSRLanguage(context.ctx)),
    };
  }

  i18nStore = createI18nStore(this.props.language, this.props.languageMap);

  componentDidMount() {
    window.addEventListener('unhandledrejection', ({ reason }) => {
      const { message, response } = reason as HTTPError;
      const { statusText, body } = response || {};

      const tips = body?.message || statusText || message;

      if (tips) alert(tips);
    });
  }

  render() {
    const { Component, pageProps, router } = this.props,
      { t } = this.i18nStore;

    return (
      <I18nContext.Provider value={this.i18nStore}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <MainNavigator />

        <div className="pt-2">
          <Component {...pageProps} />
        </div>

        <footer className="flex-fill d-flex flex-wrap justify-content-around align-items-center border-top py-4 gap-3">
          <a
            className="d-flex justify-content-center align-items-center"
            href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('powered_by')}
            <span className="mx-2">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
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
      </I18nContext.Provider>
    );
  }
}
