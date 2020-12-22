import Head from 'next/head';

import { ThemeProvider } from '@storeen/components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Storeen</title>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
