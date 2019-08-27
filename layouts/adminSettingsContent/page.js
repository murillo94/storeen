import Content from './content';

const sidebarStyle = {
  width: '225px',
  marginRight: '30px'
};

const sidebar = [
  {
    name: 'Meus dados',
    icon: 'user',
    href: '/settings/profile'
  },
  {
    name: 'Dados da loja',
    icon: 'shopping-bag',
    href: '/settings/store'
  },
  {
    name: 'Pagamentos',
    icon: 'credit-card',
    href: '/settings/payments'
  },
  {
    name: 'Opções de frete',
    icon: 'truck',
    href: '/settings/shipping'
  },
  {
    name: 'Jurídico',
    icon: 'shield',
    href: '/settings/legal'
  }
];

const Page = ({ children, padding = '30px' }) => (
  <Content sidebar={sidebar} padding={padding} customStyle={sidebarStyle}>
    {children}
  </Content>
);

export default Page;
