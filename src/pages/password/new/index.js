import Page from 'layouts/login';

import Image from 'components/image';
import { Heading } from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';

import useLayout from 'hooks/layouts/useLayout';

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
      src={require('images/logo-icon.svg')}
      width="57px"
      height="57px"
      customStyle={imageStyle}
    />
  </div>
);

const New = () => (
  <>
    <Heading text="Redefinir sua senha" />
    <Logo />
    <Input type="email" labelText="Email" id="email" name="email" />
    <Button text="Redefinir senha" customStyle={buttonStyle} />
  </>
);

export default useLayout(Page)(New);
