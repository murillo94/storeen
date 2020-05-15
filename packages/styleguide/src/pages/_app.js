import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import * as SC from '@storeen/components';
import { PropsTable } from '../components/PropsTable';

const customComponents = {
  ...SC,
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
  thead: SC.TableHead,
  tbody: SC.TableBody,
  tr: SC.TableRow,
  th: SC.TableHeadCell,
  td: SC.TableBodyCell,
  PropsTable
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
