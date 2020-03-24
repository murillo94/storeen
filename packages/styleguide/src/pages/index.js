import { TabList, Tab } from '@storeen/components';

// eslint-disable-next-line import/no-unresolved
import { frontMatter as docsPages } from './docs/*.mdx';

const formatPath = path => path.replace(/\.mdx$/, '');

const App = () => (
  <>
    <h1>Storeen&apos;s design system</h1>
    <TabList>
      {docsPages.map(page => (
        // eslint-disable-next-line no-underscore-dangle
        <Tab text={page.title} href={formatPath(page.__resourcePath)} />
      ))}
    </TabList>
  </>
);

export default App;
