import { useState } from 'react';
import Chart from 'react-frappe-charts';
import Router from 'next/router';

import Page from '@app/layouts/adminContent';

import {
  Menu,
  MenuGroup,
  MenuItem,
  MenuItemButton,
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

import useLayout from '@app/hooks/layout/useLayout';

import { formatBRL } from '@app/utils/currency';

const headers = ['Hora', 'Total de vendas', 'Pedidos', 'Valor médio do pedido'];
const items = [
  {
    hour: 'Vestido Blue Denim',
    total: formatBRL(45.0),
    orders: 2,
    average: formatBRL(22.5)
  },
  {
    hour: 'Vestido Blue Denim',
    total: formatBRL(161.0),
    orders: 5,
    average: formatBRL(32.2)
  },
  {
    hour: 'Vestido Blue Denim',
    total: formatBRL(63.0),
    orders: 8,
    average: formatBRL(7.875)
  },
  {
    hour: 'Vestido Blue Denim',
    total: formatBRL(116.0),
    orders: 9,
    average: formatBRL(12.8888888889)
  },
  {
    hour: 'Vestido Blue Denim',
    total: formatBRL(163.0),
    orders: 4,
    average: formatBRL(40.75)
  }
];

const Filter = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);

  const handleClickFilter = () => {
    setVisibleFilter(!visibleFilter);
  };

  return (
    <Menu
      id="filter"
      isVisible={visibleFilter}
      hasBorder
      appearance="minimal"
      icon="calendar"
      text="Hoje"
      onClick={handleClickFilter}
    >
      <MenuGroup id="filter" isVisible={!visibleFilter}>
        <MenuItem>
          <MenuItemButton>todo</MenuItemButton>
        </MenuItem>
        <MenuItem>
          <MenuItemButton>todo</MenuItemButton>
        </MenuItem>
      </MenuGroup>
    </Menu>
  );
};

const AverageOrdersOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <Stack space="large">
      <SubHeader
        title="Valor médio do pedido ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      >
        <Filter />
      </SubHeader>
      <Container title="Valor médio do pedido" paddingBottom={0}>
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
      <Table ariaLabel="Valor médio do pedido">
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
              <Td>
                <TextTableCell text={item.orders} />
              </Td>
              <Td>
                <TextTableCell text={item.average} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default useLayout(Page)(AverageOrdersOverTime);
