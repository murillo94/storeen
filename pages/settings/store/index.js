import Page from 'layouts/admin/page';

import Container from 'components/container';
import { Input } from 'components/input';

const sidebar = [
  {
    name: 'Perfil',
    icon: 'user',
    href: '/settings'
  },
  {
    name: 'Dados da loja',
    icon: 'shopping-bag',
    href: '/settings/store'
  }
];

const StoreSettings = () => (
  <Page sidebar={sidebar}>
    <Container title="Dados da loja">
      <Input labelText="Título do produto" id="title" name="title" />
      <Input labelText="Descrição" id="description" name="description" />
      <Input labelText="Código do produto" id="code" name="code" />
    </Container>
  </Page>
);

export default StoreSettings;
