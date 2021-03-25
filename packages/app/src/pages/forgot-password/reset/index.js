import Page from '@app/layouts/signin';

import { Box, Image, Stack, Heading, Input, Button } from '@storeen/components';

import usePasswordReset from '@app/containers/usePasswordReset';

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

const Reset = () => {
  const {
    state: { password },
    actions: { onChange }
  } = usePasswordReset();

  return (
    <>
      <Logo />
      <Stack space="xlarge">
        <Heading>Nova senha</Heading>
        <Stack>
          <Input
            type="password"
            labelText="Senha"
            id="new-password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <Button
            marginY={4}
            marginX={0}
            sx={{
              width: '100%'
            }}
          >
            Alterar senha
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default useLayout(Page)(Reset);
