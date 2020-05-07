import Page from '../../../layouts/login';

import { Image, Heading, Input, Button } from '@storeen/components';

import usePasswordNew from '../../../containers/usePasswordNew';

import useLayout from '../../../hooks/layout/useLayout';

const Logo = () => (
  <div>
    <Image
      src={require('../../../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      marginY={6}
    />
  </div>
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
