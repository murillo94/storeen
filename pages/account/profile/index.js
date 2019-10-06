import { useState } from 'react';

import Page from 'layouts/adminSettingsContent/account';

import Container from 'components/container';
import Input from 'components/input';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'utils/layouts/useLayout';

const AccountSettings = () => {
  const [infoUser, setInfoUser] = useState({
    name: '',
    email: '',
    phone: '',
    actualPassword: '',
    newPassword: '',
    newConfirmPassword: ''
  });

  const handleChangeInfoUser = (value, key) => {
    setInfoUser(prevState => ({ ...prevState, [key]: value }));
  };

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
          name="name"
          value={infoUser.name}
          onChange={({ target }) => handleChangeInfoUser(target.value, 'name')}
        />
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="email"
          value={infoUser.email}
          onChange={({ target }) => handleChangeInfoUser(target.value, 'email')}
        />
        <Input
          type="tel"
          labelText="Telefone"
          id="phone"
          name="phone"
          value={infoUser.phone}
          mask="phone"
          onChange={({ target }) => handleChangeInfoUser(target.value, 'phone')}
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
            value={infoUser.actualPassword}
            onChange={({ target }) =>
              handleChangeInfoUser(target.value, 'actualPassword')
            }
          />
          <Input
            type="password"
            labelText="Nova senha"
            id="new-password"
            name="new-password"
            value={infoUser.newPassword}
            onChange={({ target }) =>
              handleChangeInfoUser(target.value, 'newPassword')
            }
          />
          <Input
            type="password"
            labelText="Confirmação da nova senha"
            id="new-confirm-password"
            name="new-confirm-password"
            value={infoUser.newConfirmPassword}
            onChange={({ target }) =>
              handleChangeInfoUser(target.value, 'newConfirmPassword')
            }
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
