import Page from 'layouts/adminSettingsContent/account';

import useAccountProfile from 'containers/useAccountProfile';

import Container from 'components/container';
import Input from 'components/input';
import Collapse from 'components/collapse';
import Footer from 'components/footer';
import Button from 'components/button';

import useLayout from 'utils/layouts/useLayout';

const AccountSettings = () => {
  const { state, actions } = useAccountProfile();

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
          value={state.name}
          onChange={({ target }) => actions.handleChange('name', target.value)}
        />
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="email"
          value={state.email}
          onChange={({ target }) => actions.handleChange('email', target.value)}
        />
        <Input
          type="tel"
          labelText="Telefone"
          id="phone"
          name="phone"
          value={state.phone}
          mask="phone"
          onChange={({ target }) => actions.handleChange('phone', target.value)}
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
            value={state.actualPassword}
            onChange={({ target }) =>
              actions.handleChange('actualPassword', target.value)
            }
          />
          <Input
            type="password"
            labelText="Nova senha"
            id="new-password"
            name="new-password"
            value={state.newPassword}
            onChange={({ target }) =>
              actions.handleChange('newPassword', target.value)
            }
          />
          <Input
            type="password"
            labelText="Confirmação da nova senha"
            id="new-confirm-password"
            name="new-confirm-password"
            value={state.newConfirmPassword}
            onChange={({ target }) =>
              actions.handleChange('newConfirmPassword', target.value)
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
