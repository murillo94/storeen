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
  h1: props => <Heading {...props} is="h1" marginTop={11} marginBottom={5} />,
  h2: props => <Heading {...props} is="h2" marginTop={11} marginBottom={5} />,
  h3: props => <Heading {...props} is="h3" marginTop={11} marginBottom={5} />,
  h4: props => <Heading {...props} is="h4" marginTop={11} marginBottom={5} />,
  p: props => <Paragraph marginBottom={2} {...props} />,
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
