import Page from '../../../layouts/login';

import { Image, Heading, Input, Button } from '@storeen/components';

import usePasswordNew from '../../../containers/usePasswordNew';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

const buttonStyle = {
  width: '100%',
  margin: '20px 0'
};

const imageStyle = {
  margin: '30px 0'
};

const Logo = () => (
  <div>
    <Image
      src={require('../../../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      customStyle={imageStyle}
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
      <Heading text="Redefinir sua senha" />
      <Logo />
      <Input
        type="email"
        labelText="Email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Button text="Redefinir senha" customStyle={buttonStyle} />
    </>
  );
};

export default useLayout(Page)(New);
