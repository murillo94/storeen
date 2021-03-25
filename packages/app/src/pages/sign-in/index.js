import Router from 'next/router';
import Link from 'next/link';

import Page from '@app/layouts/signin';

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

import useSignIn from '@app/containers/useSignIn';

import useLayout from '@app/hooks/layout/useLayout';

const Logo = () => (
  <Box>
    <Image
      src={require('@app/public/images/logo-all-horizontal.svg')}
      alt="Desenho da logo da Storeen e texto"
      width="130px"
      height="50px"
      marginY={6}
    />
  </Box>
);

const SignIn = () => {
  const {
    state: { email, password },
    actions: { onChange }
  } = useSignIn();

  const handleClickSignIn = () => Router.push('/home');

  return (
    <>
      <Logo />
      <Stack space="xlarge">
        <Heading>Que bom que voltou!</Heading>
        <Stack space="medium">
          <Stack sx={{ textAlign: 'right' }}>
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
            <Link href="/forgot-password/email" passHref>
              <Anchor color="primary" ariaLabel="Altere a sua senha">
                Esqueceu sua senha?
              </Anchor>
            </Link>
          </Stack>
          <Button
            sx={{
              width: '100%'
            }}
            onClick={handleClickSignIn}
          >
            Entrar
          </Button>
        </Stack>
        <Stack space="medium">
          <Box
            as="hr"
            margin={0}
            sx={{
              width: '100%',
              border: 'none',
              borderTopWidth: '1px',
              borderTopStyle: 'solid',
              borderTopColor: 'gray300'
            }}
          />
          <Paragraph color="muted" marginBottom={1}>
            Não tem uma conta ainda?{' '}
            <Link href="/sign-up" passHref>
              <Anchor color="primary" ariaLabel="Crie a sua loja de graça!">
                Crie sua loja
              </Anchor>
            </Link>
          </Paragraph>
        </Stack>
      </Stack>
    </>
  );
};

export default useLayout(Page)(SignIn);
