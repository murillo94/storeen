import Page from 'layouts/adminSidebarContent/page';

import Container from 'components/container';
import { Input } from 'components/input';

const Settings = () => (
  <Page>
    <Container title="Perfil">
      <Input labelText="Título do produto" id="title" name="title" />
      <Input labelText="Descrição" id="description" name="description" />
      <Input labelText="Código do produto" id="code" name="code" />
    </Container>
  </Page>
);

export default Settings;
