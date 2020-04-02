import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Heading, Paragraph, Anchor } from '@storeen/components';

const customComponents = {
  h1: ({ children }) => (
    <Heading text={children} is="h1" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h2: ({ children }) => (
    <Heading text={children} is="h2" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h3: ({ children }) => (
    <Heading text={children} is="h3" customStyle={{ margin: '65px 0 25px' }} />
  ),
  h4: ({ children }) => (
    <Heading text={children} is="h4" customStyle={{ margin: '65px 0 25px' }} />
  ),
  p: ({ children }) => <Paragraph text={children} />,
  a: ({ children }) => <Anchor text={children} />
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
