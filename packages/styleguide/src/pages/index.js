/* eslint-disable import/no-unresolved, no-underscore-dangle */
import { TabList, Tab } from '@storeen/components';

import { frontMatter as docsPages } from './docs/*.mdx';

const formatPath = path => path.replace(/\.mdx$/, '');

const App = () => (
  <>
    <h1>Storeen&apos;s design system</h1>
    <TabList>
      {docsPages.map(page => (
        <Tab
          key={page.__resourcePath}
          text={page.title}
          href={formatPath(page.__resourcePath)}
        />
      ))}
    </TabList>
  </>
);

export default App;
