import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Storeen</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
