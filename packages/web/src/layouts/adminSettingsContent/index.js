import Content from './content';

const Page = ({ children, options = [], padding = '30px' }) => (
  <Content options={options} padding={padding}>
    {children}
  </Content>
);

export default Page;
