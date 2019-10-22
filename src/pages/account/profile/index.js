import Page from 'layouts/adminSettingsContent/account';

import useAccountProfile from 'containers/useAccountProfile';

import Container from 'components/container';
import Input from 'components/input';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'hooks/layout/useLayout';

const AccountSettings = () => {
  const {
    state: { personalData, password },
    actions: { onChange }
  } = useAccountProfile();

  return (
    <>
      <Container
        title="Dados pessoais"
        subTitle="Iremos usar essas informações para entrar em contato com você."
        isForm
      >
        <Input
          labelText="Nome"
          id="name"
          name="personalData.name"
          value={personalData.name}
          onChange={onChange}
        />
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="personalData.email"
          value={personalData.email}
          onChange={onChange}
        />
        <Input
          type="tel"
          labelText="Telefone"
          id="phone"
          name="personalData.phone"
          value={personalData.phone}
          mask="phone"
          onChange={onChange}
        />
      </Container>
      <Container
        title="Senha"
        subTitle="Caso seja necessário a alteração da sua senha, clique no botão abaixo."
        isForm
      >
        <Collapse
          content={<Button appearance="minimal" text="Alterar senha" />}
        >
          <Input
            type="password"
            labelText="Senha atual"
            id="actual-password"
            name="password.actualPassword"
            value={password.actualPassword}
            onChange={onChange}
          />
          <Input
            type="password"
            labelText="Nova senha"
            id="new-password"
            name="password.newPassword"
            value={password.newPassword}
            onChange={onChange}
          />
          <Input
            type="password"
            labelText="Confirmação da nova senha"
            id="new-confirm-password"
            name="password.newConfirmPassword"
            value={password.newConfirmPassword}
            onChange={onChange}
          />
        </Collapse>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(AccountSettings);
