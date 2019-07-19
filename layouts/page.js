import Content from './content';

const Page = ({ children, padding = 20 }) => (
  <Content padding={padding}>{children}</Content>
);

export default Page;
