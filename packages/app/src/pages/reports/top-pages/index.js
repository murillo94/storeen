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

const headers = ['Página', 'Total de visitas'];
const items = [
  {
    page: 'Vestido Blue Denim',
    total: 140
  },
  {
    page: 'Vestido Blue Denim',
    total: 47
  },
  {
    page: 'Vestido Blue Denim',
    total: 71
  },
  {
    page: 'Vestido Blue Denim',
    total: 21
  },
  {
    page: 'Vestido Blue Denim',
    total: 35
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

const TopPages = () => {
  const handleBack = () => Router.back();

  return (
    <Stack>
      <SubHeader
        title="Páginas mais visitadas ao longo do tempo"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      >
        <Filter />
      </SubHeader>
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
