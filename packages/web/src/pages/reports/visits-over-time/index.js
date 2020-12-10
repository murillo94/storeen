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

const headers = ['Hora', 'Total de visitas'];
const items = [
  {
    hour: 'Vestido Blue Denim',
    total: 14
  },
  {
    hour: 'Vestido Blue Denim',
    total: 162
  },
  {
    hour: 'Vestido Blue Denim',
    total: 173
  },
  {
    hour: 'Vestido Blue Denim',
    total: 180
  },
  {
    hour: 'Vestido Blue Denim',
    total: 196
  }
];

const VisitsOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <Stack>
      <SubHeader
        title="Visitas ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Container title="Total de visitas" paddingBottom={0}>
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
      <Table ariaLabel="Total de visitas">
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.hour}>
              <Td>
                <TextTableCell text={item.hour} />
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

export default useLayout(Page)(VisitsOverTime);
