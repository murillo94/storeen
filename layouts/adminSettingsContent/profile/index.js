import Page from 'layouts/adminSettingsContent';

const options = [
  {
    name: 'Meus dados',
    icon: 'user',
    href: '/account'
  }
];

const PageProfile = ({ children }) => <Page options={options}>{children}</Page>;

export default PageProfile;
