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

const headers = ['Hora', 'Pedidos', 'Total de vendas'];
const items = [
  {
    hour: 'Vestido Blue Denim',
    orders: 10,
    total: formatBRL(82.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 51,
    total: formatBRL(68.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 25,
    total: formatBRL(197.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 96,
    total: formatBRL(46.0)
  },
  {
    hour: 'Vestido Blue Denim',
    orders: 81,
    total: formatBRL(57.0)
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

const OrdersOverTime = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Pedidos ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      >
        <Filter />
      </SubHeader>
      <Stack space="large">
        <Container title="Total de pedidos" paddingBottom={0}>
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
        <Table ariaLabel="Total de pedidos">
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
    </>
  );
};

export default useLayout(Page)(OrdersOverTime);
