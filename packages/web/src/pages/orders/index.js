import { useState } from 'react';

import Page from '../../layouts/adminContent';

import {
  Menu,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  SubHeader,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell
} from '@storeen/components';

import useLayout from '../../hooks/layout/useLayout';

import { formatDateToString } from '../../utils/date';

const headers = ['Número', 'Data', 'Situação', 'Total'];
const items = [
  {
    id: '#1',
    date: formatDateToString('2019-07-10T06:30:00+0000'),
    status: 'waiting_payment',
    total: 99.0
  },
  {
    id: '#2',
    date: formatDateToString('2019-08-15T01:34:00+0000'),
    status: 'canceled',
    total: 89.0
  },
  {
    id: '#3',
    date: formatDateToString('2019-09-06T04:24:00+0000'),
    status: 'sent',
    total: 79.0
  }
];
const OrdersMatchOptions = {
  waiting_payment: 'Aguardando pagamento',
  canceled: 'Cancelado',
  sent: 'Enviado'
};

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
      icon="filter"
      text="Filtrar"
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

const Orders = () => (
  <>
    <SubHeader title="Pedidos" marginBottom={8} />
    <Table
      optionsHeader={<Filter />}
      hasSearch
      ariaLabel="Pedidos"
      placeholderSearchSuffix="pedidos"
    >
      <Thead headers={headers} />
      <Tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>
              <TextTableCell text={item.id} />
            </Td>
            <Td>
              <TextTableCell text={item.date} />
            </Td>
            <Td>
              <TextTableCell text={OrdersMatchOptions[item.status]} />
            </Td>
            <Td>
              <TextTableCell text={item.total} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </>
);

export default useLayout(Page)(Orders);
