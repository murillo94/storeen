import Head from 'next/head';

const CustomApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Storeen</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
