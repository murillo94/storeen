import Page from 'layouts/login';

import Image from 'components/image';
import { Heading } from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';

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

const Change = () => (
  <Page>
    <Heading text="Nova senha" />
    <Logo />
    <Input
      type="password"
      labelText="Senha"
      id="new-password"
      name="new-password"
    />
    <Button text="Alterar senha" customStyle={buttonStyle} />
  </Page>
);

export default Change;
