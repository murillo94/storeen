import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import {
  Heading,
  Paragraph,
  Anchor,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableBodyCell,
  ThemeProvider
} from '@storeen/components';
import { PropsTable } from '../components/PropsTable';

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
  a: props => <Anchor {...props} />,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeadCell,
  td: TableBodyCell,
  PropsTable
};

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <MDXProvider components={customComponents}>
      <Head>
        <title>Storeen&apos;s design system</title>
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  </ThemeProvider>
);

export default App;
