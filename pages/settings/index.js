import Page from 'layouts/admin/page';

import SubHeader from 'components/subHeader';

const sidebar = [
  {
    name: 'Perfil',
    href: '/settings'
  },
  {
    name: 'Dados da loja',
    href: '/settings/store'
  }
];

const Settings = () => (
  <Page sidebar={sidebar}>
    <SubHeader title="Configurações" />
  </Page>
);

export default Settings;
