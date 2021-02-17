import Head from 'next/head';

import { ThemeProvider } from '@storeen/components';

const teste = {
  fontSizes: ['14px', '16px', '20px', '22px', '26px', '30px', '34px', '38px']
};

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={teste}>
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
