import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Storeen</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
