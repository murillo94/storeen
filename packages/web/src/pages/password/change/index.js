import Page from '../../../layouts/login';

import { Box, Image, Heading, Input, Button } from '@storeen/components';

import usePasswordChange from '../../../containers/usePasswordChange';

import useLayout from '../../../hooks/layout/useLayout';

const Logo = () => (
  <Box>
    <Image
      src={require('../../../public/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      marginY={6}
    />
  </Box>
);

const Change = () => {
  const {
    state: { newPassword },
    actions: { onChange }
  } = usePasswordChange();

  return (
    <>
      <Heading>Nova senha</Heading>
      <Logo />
      <Input
        type="password"
        labelText="Senha"
        id="new-password"
        name="newPassword"
        value={newPassword}
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
    </>
  );
};

export default useLayout(Page)(Change);
