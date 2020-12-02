import Page from '@web/layouts/adminContent';

import { SubHeader, Container, Stack, Inline } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Home = () => (
  <>
    <SubHeader
      title="Bem vindo, Murillo"
      subTitle="Veja o que está acontecendo na sua loja hoje."
      marginBottom={8}
    />
    <Stack space="xlarge">
      <Inline>
        <Container title="Total de vendas">todo</Container>
        <Container title="Total de visitas">todo</Container>
      </Inline>
      <Container title="Total de pedidos">todo</Container>
    </Stack>
  </>
);

export default useLayout(Page)(Home);
