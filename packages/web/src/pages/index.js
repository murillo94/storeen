import Router from 'next/router';

import Page from '../layouts/login';

import { Image } from '@storeen/components/src/components/image';
import {
  Heading,
  Paragraph,
  Anchor
} from '@storeen/components/src/components/typography';
import { Form } from '@storeen/components/src/components/form';
import Input from '@storeen/components/src/components/input';
import Button from '@storeen/components/src/components/button';

import useLogin from '../containers/useLogin';

import useLayout from '@storeen/system/src/hooks/layout/useLayout';

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
      src={require('../public/static/images/logo-icon.svg')}
      alt="Storeen logo icone"
      width="57px"
      height="57px"
      customStyle={imageStyle}
    />
  </div>
);

const Home = () => {
  const {
    state: { email, password },
    actions: { onChange }
  } = useLogin();

  const handleClickSignIn = () => Router.push('/home');

  return (
    <>
      <Heading text="Entrar" customStyle={headingStyle} />
      <Paragraph
        text="Não tem uma conta ainda?"
        color="muted"
        customStyle={paragraphStyle}
      />
      <Anchor href="/" text="Crie sua loja, é grátis!" color="primary" />
      <Logo />
      <Form>
        <Input
          type="email"
          labelText="Email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          type="password"
          labelText="Senha"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </Form>
      <Button
        text="Entrar"
        customStyle={buttonStyle}
        onClick={handleClickSignIn}
      />
      <Anchor href="/password/new" text="Esqueceu sua senha?" color="primary" />
    </>
  );
};

export default useLayout(Page)(Home);
