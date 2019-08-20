import Content from './content';

const Page = ({ children, sidebar = [], padding = '30px' }) => (
  <Content sidebar={sidebar} padding={padding}>
    {children}
  </Content>
);

export default Page;
