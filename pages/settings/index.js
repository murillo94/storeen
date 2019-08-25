import Page from 'layouts/adminSidebarContent/page';

import Container from 'components/container';
import { Input } from 'components/input';

const Settings = () => (
  <Page>
    <Container title="Perfil">
      <Input labelText="Nome" id="user-name" name="user-name" />
      <Input type="email" labelText="Email" id="user-email" name="user-email" />
      <Input
        type="tel"
        labelText="Telefone"
        id="user-phone"
        name="user-phone"
      />
    </Container>
  </Page>
);

export default Settings;
