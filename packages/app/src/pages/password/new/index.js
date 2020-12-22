import Page from '@app/layouts/login';

import { Box, Image, Heading, Input, Button } from '@storeen/components';

import usePasswordNew from '@app/containers/usePasswordNew';

import useLayout from '@app/hooks/layout/useLayout';

const Logo = () => (
  <Box>
    <Image
      src={require('@app/public/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      marginY={6}
    />
  </Box>
);

const New = () => {
  const {
    state: { email },
    actions: { onChange }
  } = usePasswordNew();

  return (
    <>
      <Heading>Redefinir sua senha</Heading>
      <Logo />
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
    </>
  );
};

export default useLayout(Page)(New);
