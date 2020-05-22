import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import * as SC from '@storeen/components';
import { CodeBlock } from '../components/CodeBlock';
import { PropsTable } from '../components/PropsTable';
import { ThemeSection } from '../components/ThemeSection';

const customComponents = {
  ...SC,
  pre: props => <div {...props} />,
  code: CodeBlock,
  h1: props => (
    <SC.Heading {...props} is="h1" marginTop={11} marginBottom={5} />
  ),
  h2: props => (
    <SC.Heading {...props} is="h2" marginTop={11} marginBottom={5} />
  ),
  h3: props => (
    <SC.Heading {...props} is="h3" marginTop={11} marginBottom={5} />
  ),
  h4: props => (
    <SC.Heading {...props} is="h4" marginTop={11} marginBottom={5} />
  ),
  p: props => <SC.Paragraph marginBottom={2} {...props} />,
  a: props => <SC.Anchor {...props} />,
  table: SC.Table,
  thead: SC.Thead,
  tbody: SC.Tbody,
  tr: SC.Tr,
  th: SC.Th,
  td: SC.Td,
  PropsTable,
  ThemeSection
};

const App = ({ Component, pageProps }) => (
  <SC.ThemeProvider>
    <MDXProvider components={customComponents}>
      <Head>
        <title>Storeen&apos;s design system</title>
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  </SC.ThemeProvider>
);

export default App;
