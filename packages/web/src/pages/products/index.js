import { useState } from 'react';
import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import {
  Menu,
  MenuGroup,
  MenuItem,
  MenuItemButton,
  SubHeader,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TextTableCell,
  Icon,
  theming
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

import { formatBRL } from '@web/utils/currency';

const headers = ['Nome', 'Preço', 'Estoque', 'Visibilidade'];
const items = [
  {
    name: 'Vestido Blue Denim',
    price: formatBRL(99.0),
    stock: 9,
    visible: true
  },
  {
    name: 'Vestido Yellow Denim',
    price: formatBRL(89.0),
    stock: 3,
    visible: false
  },
  {
    name: 'Vestido Pink Denim',
    price: formatBRL(79.0),
    stock: 5,
    visible: true
  },
  {
    name: 'Vestido Red Denim',
    price: formatBRL(109.0),
    stock: 15,
    visible: false
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

const Products = () => {
  const handleAddProduct = () => Router.push('/products/add');

  return (
    <>
      <SubHeader title="Produtos" marginBottom={8}>
        <Button onClick={handleAddProduct}>Novo produto</Button>
      </SubHeader>
      <Table
        optionsHeader={<Filter />}
        hasSearch
        ariaLabel="Produtos"
        placeholderSearchSuffix="produtos"
      >
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.name}>
              <Td>
                <TextTableCell text={item.name} />
              </Td>
              <Td>
                <TextTableCell text={item.price} />
              </Td>
              <Td>
                <TextTableCell text={item.stock} />
              </Td>
              <Td>
                <TextTableCell>
                  <Icon
                    name="eye"
                    color={
                      item.visible
                        ? theming.colors.green600
                        : theming.colors.red600
                    }
                  />
                </TextTableCell>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default useLayout(Page)(Products);
