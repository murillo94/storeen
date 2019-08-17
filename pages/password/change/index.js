import Page from 'layouts/login/page';

import Image from 'components/image';
import { Heading } from 'components/typography';
import { Input } from 'components/input';
import Button from 'components/button';

const buttonStyle = {
  width: '100%',
  margin: '10px 0'
};

const imageStyle = {
  margin: '35px 0'
};

const Logo = () => (
  <div>
    <Image
      src="/static/images/logo-icon.svg"
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
    <Input type="password" labelText="Senha" id="password" name="password" />
    <Button text="Alterar senha" customStyle={buttonStyle} />
  </Page>
);

export default Change;
