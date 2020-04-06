import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Heading, Paragraph, Anchor } from '@storeen/components';

const customComponents = {
  h1: props => (
    <Heading {...props} is="h1" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h2: props => (
    <Heading {...props} is="h2" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h3: props => (
    <Heading {...props} is="h3" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h4: props => (
    <Heading {...props} is="h4" customStyle={{ margin: '65px 0 25px' }} />
  ),
  p: props => <Paragraph {...props} />,
  a: props => <Anchor {...props} />
};

const App = ({ Component, pageProps }) => (
  <MDXProvider components={customComponents}>
    <Head>
      <title>Storeen&apos;s design system</title>
    </Head>
    <Component {...pageProps} />
  </MDXProvider>
);

export default App;
