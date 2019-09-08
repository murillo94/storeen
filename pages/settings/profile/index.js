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
      isForm
    >
      <Input labelText="Nome" id="user-name" name="user-name" />
      <Input type="email" labelText="Email" id="user-email" name="user-email" />
      <Input
        type="tel"
        labelText="Telefone"
        id="user-phone"
        name="user-phone"
        mask="phone"
      />
    </Container>
    <Container
      title="Senha"
      subTitle="Caso seja necessário a alteração da sua senha, clique no botão abaixo."
      isForm
    >
      <Button appearance="minimal" text="Alterar senha" />
      <Input
        type="password"
        labelText="Senha atual"
        id="actual-password"
        name="actual-password"
      />
      <Input
        type="password"
        labelText="Nova senha"
        id="new-password"
        name="new-password"
      />
      <Input
        type="password"
        labelText="Confirmação da nova senha"
        id="confirm-new-password"
        name="confirm-new-password"
      />
    </Container>
    <Footer>
      <Button text="Salvar" />
    </Footer>
  </Page>
);

export default ProfileSettings;
