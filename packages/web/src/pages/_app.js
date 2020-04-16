import Head from 'next/head';

import { ThemeProvider } from '@storeen/components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <title>Storeen</title>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
