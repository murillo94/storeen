import Content from './content';

const Page = ({ children, options = [] }) => (
  <Content options={options}>{children}</Content>
);

export default Page;
