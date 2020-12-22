import {
  Box,
  Inline,
  Anchor,
  Image,
  Heading,
  Paragraph,
  Button
} from '@storeen/components';

const Home = () => (
  <Box as="main">
    <Box as="nav" padding={6}>
      <Inline>
        <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
          <Anchor href="#">funcionalidades</Anchor>
          <Anchor href="#">planos</Anchor>
        </Inline>
        <Image
          src={require('@site/public/images/logo-all-horizontal.svg')}
          alt="Storeen logo com nome horizontal"
          width="200px"
          height="45px"
          marginX="auto"
          sx={{
            display: ['block']
          }}
        />
        <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
          <Anchor href="https://app-storeen.vercel.app/">entrar</Anchor>
          <Anchor href="#">criar loja</Anchor>
        </Inline>
      </Inline>
    </Box>
    <Box as="section" padding={6} sx={{ textAlign: 'center' }}>
      <Heading marginBottom={4}>
        Crie uma loja virtual completa e sem mensalidade.
      </Heading>
      <Paragraph marginBottom={10}>
        Sem limites de acessos, fotos e produtos. Nós cuidamos da tecnologia e
        você só precisa se preocupar em vender.
      </Paragraph>
      <Inline isProportional={false} sx={{ justifyContent: 'center' }}>
        <Button appearance="minimal">ver exemplo</Button>
        <Button>criar minha loja agora</Button>
      </Inline>
    </Box>
  </Box>
);

export default Home;
