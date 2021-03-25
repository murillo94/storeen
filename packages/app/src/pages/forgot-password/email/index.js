import Page from '@app/layouts/signin';

import { Box, Image, Stack, Heading, Input, Button } from '@storeen/components';

import usePasswordEmail from '@app/containers/usePasswordEmail';

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

const Email = () => {
  const {
    state: { email },
    actions: { onChange }
  } = usePasswordEmail();

  return (
    <>
      <Logo />
      <Stack space="xlarge">
        <Heading>Redefinir sua senha</Heading>
        <Stack>
          <Input
            type="email"
            labelText="Email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Button
            marginY={4}
            marginX={0}
            sx={{
              width: '100%'
            }}
          >
            Redefinir senha
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default useLayout(Page)(Email);
