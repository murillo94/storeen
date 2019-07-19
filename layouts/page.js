import Content from './content';

const Page = ({ children, padding = '20px' }) => (
  <Content padding={padding}>{children}</Content>
);

export default Page;
