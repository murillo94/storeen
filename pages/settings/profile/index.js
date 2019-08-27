import Page from 'layouts/adminSettingsContent/page';

import Container from 'components/container';
import { Input } from 'components/input';
import Footer from 'components/footer';
import Button from 'components/button';

const ProfileSettings = () => (
  <Page>
    <Container
      title="Dados pessoais"
      subTitle="Iremos usar essas informações para entrar em contato com você."
    >
      <Input labelText="Nome" id="user-name" name="user-name" />
      <Input type="email" labelText="Email" id="user-email" name="user-email" />
      <Input
        type="tel"
        labelText="Telefone"
        id="user-phone"
        name="user-phone"
      />
    </Container>
    <Footer>
      <Button appearance="positive" text="Salvar" />
    </Footer>
  </Page>
);

export default ProfileSettings;
