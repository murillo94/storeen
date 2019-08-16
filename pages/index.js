import Router from 'next/router';

import Page from 'layouts/login/page';

import Image from 'components/image';
import { Heading, Paragraph, Anchor } from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';

const imageStyle = {
  margin: '30px 0'
};

const headingStyle = {
  margin: '0 0 30px'
};

const paragraphStyle = {
  margin: '0 0 5px'
};

const buttonStyle = {
  width: '100%',
  margin: '20px 0 25px'
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

const Home = () => {
  const handleClickSignIn = () => Router.push('/home');

  return (
    <Page>
      <Heading text="Entrar" customStyle={headingStyle} />
      <Paragraph text="Não tem uma conta ainda?" customStyle={paragraphStyle} />
      <Anchor href="/" text="Crie sua loja, é grátis!" />
      <Logo />
      <Input type="email" labelText="Email" id="email" name="email" />
      <Input type="password" labelText="Senha" id="password" name="password" />
      <Button
        text="Entrar"
        customStyle={buttonStyle}
        onClick={handleClickSignIn}
      />
      <Anchor href="/password/new" text="Esqueceu sua senha?" />
    </Page>
  );
};

export default Home;
