import Page from '@web/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Inline,
  Container,
  Anchor,
  Heading
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

import { formatBRL } from '@web/utils/currency';

const Home = () => (
  <>
    <SubHeader
      title="Bem vindo, Murillo"
      subTitle="Veja o que está acontecendo na sua loja hoje."
      marginBottom={8}
    />
    <Stack space="xlarge">
      <Inline>
        <Container
          title="Total de vendas"
          optionsTitle={
            <Anchor
              href="/reports/sales-over-time"
              ariaLabel="Ver relatório detalhado de total de vendas"
              color="muted"
            >
              ver relatório
            </Anchor>
          }
        >
          <Stack space="xlarge">
            <Heading is="h3" color="muted">
              {formatBRL(9932.5)}
            </Heading>
          </Stack>
        </Container>
        <Container
          title="Total de visitas"
          optionsTitle={
            <Anchor
              href="/reports/visits-over-time"
              ariaLabel="Ver relatório detalhado de total de visitas"
              color="muted"
            >
              ver relatório
            </Anchor>
          }
        >
          <Heading is="h3" color="muted">
            100
          </Heading>
        </Container>
      </Inline>
      <Container
        title="Total de pedidos"
        optionsTitle={
          <Anchor
            href="/reports/orders-over-time"
            ariaLabel="Ver relatório detalhado de total de pedidos"
            color="muted"
          >
            ver relatório
          </Anchor>
        }
      >
        <Heading is="h3" color="muted">
          8 pedidos foram realizados
        </Heading>
      </Container>
    </Stack>
  </>
);

export default useLayout(Page)(Home);
