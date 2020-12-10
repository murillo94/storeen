import Chart from 'react-frappe-charts';
import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import {
  Stack,
  SubHeader,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell,
  theming
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

import { formatBRL } from '@web/utils/currency';

const headers = ['Hora', 'Pedidos', 'Total de vendas'];
const items = [
  {
    hour: 'Vestido Blue Denim',
    orders: 74,
    total: formatBRL(159.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 62,
    total: formatBRL(199.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 23,
    total: formatBRL(86.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 48,
    total: formatBRL(128.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 99,
    total: formatBRL(155.0)
  }
];

const SalesOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <Stack>
      <SubHeader
        title="Vendas ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Total de vendas" paddingBottom={0}>
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
      <Table ariaLabel="Total de vendas">
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.hour}>
              <Td>
                <TextTableCell text={item.hour} />
              </Td>
              <Td>
                <TextTableCell text={item.orders} />
              </Td>
              <Td>
                <TextTableCell text={item.total} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default useLayout(Page)(SalesOverTime);
