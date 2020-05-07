import Router from 'next/router';

import Page from '../layouts/login';

import {
  Image,
  Heading,
  Paragraph,
  Anchor,
  Form,
  Input,
  Button
} from '@storeen/components';

import useLogin from '../containers/useLogin';

import useLayout from '../hooks/layout/useLayout';

const Logo = () => (
  <div>
    <Image
      src={require('../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      marginY={6}
    />
  </div>
);

const Home = () => {
  const {
    state: { email, password },
    actions: { onChange }
  } = useLogin();

  const handleClickSignIn = () => Router.push('/home');

  return (
    <>
      <Heading marginBottom={6}>Entrar</Heading>
      <Paragraph color="muted" marginBottom={1}>
        Não tem uma conta ainda?
      </Paragraph>
      <Anchor href="/" color="primary" ariaLabel="Crie a sua loja de graça!">
        Crie sua loja, é grátis!
      </Anchor>
      <Logo />
      <Form>
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          type="password"
          labelText="Senha"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </Form>
      <Button
        marginTop={4}
        marginBottom={5}
        sx={{
          width: '100%'
        }}
        onClick={handleClickSignIn}
      >
        Entrar
      </Button>
      <Anchor
        href="/password/new"
        color="primary"
        ariaLabel="Altere a sua senha"
      >
        Esqueceu sua senha?
      </Anchor>
    </>
  );
};

export default useLayout(Page)(Home);
