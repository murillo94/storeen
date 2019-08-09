import Content from './content';

const Page = ({ children, padding = '30px' }) => (
  <Content padding={padding}>{children}</Content>
);

export default Page;
