import Content from './content';

const sidebarStyle = {
  width: '225px',
  marginRight: '30px'
};

const Page = ({ children, options = [], padding = '30px' }) => (
  <Content options={options} padding={padding} customStyle={sidebarStyle}>
    {children}
  </Content>
);

export default Page;
