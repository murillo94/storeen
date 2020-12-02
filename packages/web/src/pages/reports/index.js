import Page from '@web/layouts/adminContent';

import { SubHeader, Container, Stack, Inline } from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Reports = () => (
  <>
    <SubHeader title="Relatórios" marginBottom={8} />
    <Stack space="xlarge">
      <Inline>
        <Container title="Venda geral">todo</Container>
        <Container title="Total de pedido">todo</Container>
      </Inline>
      <Inline>
        <Container title="Média do valor dos pedidos">todo</Container>
        <Container title="Total de visitas">todo</Container>
        <Container title="Páginas mais visitadas">todo</Container>
      </Inline>
    </Stack>
  </>
);

export default useLayout(Page)(Reports);
