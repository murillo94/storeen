import Router from 'next/router';

import Image from '../components/image';
import { Heading, Anchor } from '../components/typography';
import Input from '../components/input';
import Button from '../components/button';

const Logo = () => (
  <>
    <div>
      <Image src="/static/images/logo-icon.svg" width="60px" height="60px" />
    </div>

    <style jsx>
      {`
        div {
          margin: 20px 20px 40px;
        }
      `}
    </style>
  </>
);

const Home = () => {
  const handleClickSignIn = () => Router.push('/home');

  return (
    <>
      <section>
        <main>
          <div>
            <Heading text="Entrar" />
            <Logo />
            <Input type="email" labelText="Email" id="email" name="email" />
            <Input
              type="password"
              labelText="Senha"
              id="password"
              name="password"
            />
            <Button
              text="Entrar"
              width="100%"
              margin="20px 0 30px"
              onClick={handleClickSignIn}
            />
            <Anchor href="/" text="Esqueceu sua senha?" hover />
          </div>
        </main>
      </section>

      <style jsx>
        {`
          section {
            background-color: #f7f7fc;
            text-align: center;
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 30px;
          }

          div {
            width: 300px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
