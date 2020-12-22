import Page from '@app/layouts/adminSettingsContent';

const options = [
  {
    name: 'Meus dados',
    icon: 'user',
    href: '/account/profile'
  },
  {
    name: 'Planos',
    icon: 'award',
    href: '/account/plans'
  },
  {
    name: 'Histórico',
    icon: 'credit-card',
    href: '/account/payments'
  }
];

const PageProfile = ({ children }) => <Page options={options}>{children}</Page>;

export default PageProfile;
