import Page from '@app/layouts/adminSettingsContent';

const options = [
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

const PageStore = ({ children }) => <Page options={options}>{children}</Page>;

export default PageStore;
