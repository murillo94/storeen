import Page from '../../../layouts/login';

import { Image, Heading, Input, Button } from '@storeen/components';

import usePasswordChange from '../../../containers/usePasswordChange';

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

const Change = () => {
  const {
    state: { newPassword },
    actions: { onChange }
  } = usePasswordChange();

  return (
    <>
      <Heading text="Nova senha" />
      <Logo />
      <Input
        type="password"
        labelText="Senha"
        id="new-password"
        name="newPassword"
        value={newPassword}
        onChange={onChange}
      />
      <Button text="Alterar senha" customStyle={buttonStyle} />
    </>
  );
};

export default useLayout(Page)(Change);
