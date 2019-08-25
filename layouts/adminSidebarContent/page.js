import Content from './content';

const sidebarStyle = {
  width: '225px',
  marginRight: '30px'
};

const sidebar = [
  {
    name: 'Perfil',
    icon: 'user',
    href: '/settings/profile'
  },
  {
    name: 'Dados da loja',
    icon: 'shopping-bag',
    href: '/settings/store'
  }
];

const Page = ({ children, padding = '30px' }) => (
  <Content sidebar={sidebar} padding={padding} customStyle={sidebarStyle}>
    {children}
  </Content>
);

export default Page;
