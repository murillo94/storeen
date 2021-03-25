import Router from 'next/router';

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

import useSignUp from '@app/containers/useSignUp';

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

const SignUp = () => {
  const {
    state: { fullName, storeName, email, password },
    actions: { onChange }
  } = useSignUp();

  const handleClickSignIn = () => Router.push('/home');

  return (
    <>
      <Logo />
      <Stack space="xlarge">
        <Box>
          <Heading marginBottom={4}>Comece hoje seu teste gratuito!</Heading>
          <Paragraph
            color="muted"
            margin="0 auto"
            sx={{ textAlign: 'center', width: '80%' }}
          >
            Acesso a todos os recursos, sem necessidade de cartão de crédito.
          </Paragraph>
        </Box>
        <Stack space="medium">
          <Stack>
            <Input
              labelText="Nome completo"
              id="full-name"
              name="full-name"
              value={fullName}
              onChange={onChange}
            />
            <Input
              labelText="Nome da sua loja"
              id="store-name"
              name="store-name"
              value={storeName}
              onChange={onChange}
            />
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
            sx={{
              width: '100%'
            }}
            onClick={handleClickSignIn}
          >
            Criar minha loja
          </Button>
          <Paragraph color="muted" marginBottom={1}>
            Ao criar uma conta, significa que você concorda com os{' '}
            <Anchor
              href="https://site-storeen.vercel.app/terms"
              color="primary"
              ariaLabel="Leia os termos de uso"
              target="_blank"
            >
              Termos de uso
            </Anchor>{' '}
            e{' '}
            <Anchor
              href="https://site-storeen.vercel.app/privacy"
              color="primary"
              ariaLabel="Leia a política de privacidade"
              target="_blank"
            >
              Política de privacidade
            </Anchor>
          </Paragraph>
        </Stack>
      </Stack>
    </>
  );
};

export default useLayout(Page)(SignUp);
