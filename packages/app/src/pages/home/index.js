import Link from 'next/link';

import Page from '@app/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Inline,
  Container,
  Anchor,
  Heading
} from '@storeen/components';

import useLayout from '@app/hooks/layout/useLayout';

import { formatBRL } from '@app/utils/currency';

const Home = () => (
  <>
    <SubHeader
      title="Bem vindo, Murillo"
      subTitle="Veja o que está acontecendo na sua loja hoje."
      marginBottom={8}
    />
    <Stack space="large">
      <Inline spaceY="large">
        <Container
          title="Total de vendas"
          optionsTitle={
            <Link href="/reports/sales-over-time" passHref>
              <Anchor
                ariaLabel="Ver relatório detalhado de total de vendas"
                color="muted"
              >
                ver relatório
              </Anchor>
            </Link>
          }
        >
          <Stack space="large">
            <Heading is="h5" color="muted">
              {formatBRL(9932.5)}
            </Heading>
          </Stack>
        </Container>
        <Container
          title="Total de visitas"
          optionsTitle={
            <Link href="/reports/visits-over-time" passHref>
              <Anchor
                ariaLabel="Ver relatório detalhado de total de visitas"
                color="muted"
              >
                ver relatório
              </Anchor>
            </Link>
          }
        >
          <Heading is="h5" color="muted">
            100
          </Heading>
        </Container>
      </Inline>
      <Container
        title="Total de pedidos"
        optionsTitle={
          <Link href="/reports/orders-over-time" passHref>
            <Anchor
              ariaLabel="Ver relatório detalhado de total de pedidos"
              color="muted"
            >
              ver relatório
            </Anchor>
          </Link>
        }
      >
        <Heading is="h5" color="muted">
          8 pedidos foram realizados
        </Heading>
      </Container>
    </Stack>
  </>
);

export default useLayout(Page)(Home);
