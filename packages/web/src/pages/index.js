import Router from 'next/router';
import Link from 'next/link';

import Page from '@web/layouts/login';

import {
  Box,
  Image,
  Heading,
  Paragraph,
  Anchor,
  Stack,
  Input,
  Button
} from '@storeen/components';

import useLogin from '@web/containers/useLogin';

import useLayout from '@web/hooks/layout/useLayout';

const Logo = () => (
  <Box>
    <Image
      src={require('@web/public/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      marginY={6}
    />
  </Box>
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
      <Link href="/" passHref>
        <Anchor color="primary" ariaLabel="Crie a sua loja de graça!">
          Crie sua loja, é grátis!
        </Anchor>
      </Link>
      <Logo />
      <Stack>
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
      </Stack>
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
      <Link href="/password/new" passHref>
        <Anchor color="primary" ariaLabel="Altere a sua senha">
          Esqueceu sua senha?
        </Anchor>
      </Link>
    </>
  );
};

export default useLayout(Page)(Home);
