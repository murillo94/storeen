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

const headers = ['Página', 'Total de visitas'];
const items = [
  {
    page: 'Vestido Blue Denim',
    total: 140
  },
  {
    hour: 'Vestido Blue Denim',
    total: 47
  },
  {
    hour: 'Vestido Blue Denim',
    total: 71
  },
  {
    hour: 'Vestido Blue Denim',
    total: 21
  },
  {
    hour: 'Vestido Blue Denim',
    total: 35
  }
];

const TopPages = () => {
  const handleBack = () => Router.back();

  return (
    <Stack>
      <SubHeader
        title="Páginas mais visitadas ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Páginas mais visitadas" paddingBottom={0}>
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
      <Table ariaLabel="Total de visitas">
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.page}>
              <Td>
                <TextTableCell text={item.page} />
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

export default useLayout(Page)(TopPages);
