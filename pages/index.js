import Router from 'next/router';

import Page from 'layouts/login/page';

import Image from 'components/image';
import { Heading, Paragraph, Anchor } from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';

const Logo = () => (
  <div>
    <Image
      src="/static/images/logo-icon.svg"
      width="57px"
      height="57px"
      margin="35px 0"
    />
  </div>
);

const Home = () => {
  const handleClickSignIn = () => Router.push('/home');

  return (
    <Page>
      <Heading text="Entrar" margin="0 0 35px" />
      <Paragraph text="Não tem uma conta ainda?" margin="0 0 5px" />
      <Anchor href="/" text="Crie sua loja, é grátis!" />
      <Logo />
      <Input type="email" labelText="Email" id="email" name="email" />
      <Input type="password" labelText="Senha" id="password" name="password" />
      <Button
        text="Entrar"
        width="100%"
        margin="20px 0 30px"
        onClick={handleClickSignIn}
      />
      <Anchor href="/password/new" text="Esqueceu sua senha?" />
    </Page>
  );
};

export default Home;
