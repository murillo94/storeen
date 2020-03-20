import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Storeen&apos;s design system</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
