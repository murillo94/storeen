import { useState } from 'react';

import Page from 'layouts/adminSettingsContent/account';

import Container from 'components/container';
import Input from 'components/input';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

const AccountSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [actualPassword, setActualPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleActualPassword = e => {
    setActualPassword(e.target.value);
  };

  const handleNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleNewConfirmPassword = e => {
    setNewConfirmPassword(e.target.value);
  };

  return (
    <Page>
      <Container
        title="Dados pessoais"
        subTitle="Iremos usar essas informações para entrar em contato com você."
        isForm
      >
        <Input
          labelText="Nome"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          type="tel"
          labelText="Telefone"
          id="phone"
          name="phone"
          value={phone}
          mask="phone"
          onChange={handleChangePhone}
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
            name="actual-password"
            value={actualPassword}
            onChange={handleActualPassword}
          />
          <Input
            type="password"
            labelText="Nova senha"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={handleNewPassword}
          />
          <Input
            type="password"
            labelText="Confirmação da nova senha"
            id="new-confirm-password"
            name="new-confirm-password"
            value={newConfirmPassword}
            onChange={handleNewConfirmPassword}
          />
        </Collapse>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </Page>
  );
};

export default AccountSettings;
