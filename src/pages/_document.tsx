/* eslint-disable react/jsx-props-no-spreading */
import {ColorModeScript} from '@chakra-ui/color-mode';
import createEmotionServer from '@emotion/server/create-instance';
import type {DocumentContext} from 'next/document';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import * as React from 'react';

import createEmotionCache from '../styles/createEmotionCache';

const APP_NAME = 'ZkPad';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();

    const {extractCriticalToChunks} = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App: any) => props => <App emotionCache={cache} {...props} />
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: style.css}}
      />
    ));

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags]
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          {/* <link rel='manifest' href='/site.webmanifest' /> */}
          {/* <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#2e2e2e' /> */}
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />

          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          {/* <link rel='manifest' href='/site.webmanifest' /> */}
          {/* <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#29296e' /> */}
          <meta name="msapplication-TileColor" content="#29296e" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="ZkPad - 1st launchpad powered by Starknet" />
          <meta property="og:title" content="ZkPad" />
          <meta
            property="og:description"
            content="We're building a venture investment platform for all."
          />
          <meta property="og:image" content="/images/home/banner_3d_full.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;