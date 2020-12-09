import Page from '@web/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Inline,
  Container,
  Anchor
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Reports = () => (
  <>
    <SubHeader title="Relatórios" marginBottom={8} />
    <Stack space="xlarge">
      <Inline>
        <Container
          title="Venda geral"
          optionsTitle={
            <Anchor
              ariaLabel="Visitar relatório detalhado de venda geral"
              color="muted"
            >
              visitar relatório
            </Anchor>
          }
        >
          todo
        </Container>
        <Container
          title="Total de pedido"
          optionsTitle={
            <Anchor
              ariaLabel="Visitar relatório detalhado de total de pedido "
              color="muted"
            >
              visitar relatório
            </Anchor>
          }
        >
          todo
        </Container>
      </Inline>
      <Inline>
        <Container
          title="Média do valor dos pedidos"
          optionsTitle={
            <Anchor
              ariaLabel="Visitar relatório detalhado de média do valor dos pedidos"
              color="muted"
            >
              visitar relatório
            </Anchor>
          }
        >
          todo
        </Container>
        <Container
          title="Total de visitas"
          optionsTitle={
            <Anchor
              ariaLabel="Visitar relatório detalhado de total de visitas"
              color="muted"
            >
              visitar relatório
            </Anchor>
          }
        >
          todo
        </Container>
      </Inline>
      <Inline>
        <Container
          title="Páginas mais visitadas"
          optionsTitle={
            <Anchor
              ariaLabel="Visitar relatório detalhado de páginas mais visitadas"
              color="muted"
            >
              visitar relatório
            </Anchor>
          }
        >
          todo
        </Container>
      </Inline>
    </Stack>
  </>
);

export default useLayout(Page)(Reports);
