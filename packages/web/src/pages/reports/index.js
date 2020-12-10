import Chart from 'react-frappe-charts';

import Page from '@web/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Inline,
  Container,
  Anchor,
  theming
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const Reports = () => (
  <>
    <SubHeader title="Relatórios" marginBottom={8} />
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
          paddingBottom={0}
        >
          <Chart
            type="line"
            colors={[theming.colors.blue600]}
            axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            animate={0}
            data={{
              labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
            }}
            lineOptions={{
              spline: 1,
              hideDots: 1
            }}
          />
        </Container>
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
          paddingBottom={0}
        >
          <Chart
            type="line"
            colors={[theming.colors.blue600]}
            axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            animate={0}
            data={{
              labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              datasets: [{ values: [257, 80, 130, 126, 254, 137, 22, 123] }]
            }}
            lineOptions={{
              spline: 1,
              hideDots: 1
            }}
          />
        </Container>
      </Inline>
      <Inline>
        <Container
          title="Valor médio do pedido"
          optionsTitle={
            <Anchor
              href="/reports/average-order-over-time"
              ariaLabel="Ver relatório detalhado de valor médio do pedido"
              color="muted"
            >
              ver relatório
            </Anchor>
          }
          paddingBottom={0}
        >
          <Chart
            type="line"
            colors={[theming.colors.blue600]}
            axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            animate={0}
            data={{
              labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              datasets: [{ values: [112, 2, 12, 228, 23, 15, 106, 12] }]
            }}
            lineOptions={{
              spline: 1,
              hideDots: 1
            }}
          />
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
          <Chart
            type="line"
            colors={[theming.colors.blue600]}
            axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            animate={0}
            data={{
              labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              datasets: [{ values: [159, 169, 213, 95, 106, 34, 65, 130] }]
            }}
            lineOptions={{
              spline: 1,
              hideDots: 1
            }}
          />
        </Container>
      </Inline>
      <Inline>
        <Container
          title="Páginas mais visitadas"
          optionsTitle={
            <Anchor
              href="/reports/top-pages"
              ariaLabel="Ver relatório detalhado de páginas mais visitadas"
              color="muted"
            >
              ver relatório
            </Anchor>
          }
          paddingBottom={0}
        >
          <Chart
            type="line"
            colors={[theming.colors.blue600]}
            axisOptions={{ xAxisMode: 'tick', xIsSeries: 1 }}
            height={250}
            animate={0}
            data={{
              labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
              datasets: [{ values: [131, 294, 251, 283, 211, 298, 100, 199] }]
            }}
            lineOptions={{
              spline: 1,
              hideDots: 1
            }}
          />
        </Container>
      </Inline>
    </Stack>
  </>
);

export default useLayout(Page)(Reports);
