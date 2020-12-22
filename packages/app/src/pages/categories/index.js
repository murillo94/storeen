import { useState } from 'react';
import Router from 'next/router';

import Page from '@app/layouts/adminContent';

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
  TextTableCell
} from '@storeen/components';

import useLayout from '@app/hooks/layout/useLayout';

const headers = ['Nome', 'Descrição'];
const items = [
  {
    name: 'Calças',
    description: 'Excepteur sint occaecat cupidatat non proident.'
  },
  {
    name: 'Camisetas',
    description: 'Excepteur sint occaecat cupidatat non proident.'
  },
  {
    name: 'Vestidos',
    description: 'Excepteur sint occaecat cupidatat non proident.'
  },
  {
    name: 'Chinelos',
    description: 'Excepteur sint occaecat cupidatat non proident.'
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

const Categories = () => {
  const handleAddCategorie = () => Router.push('/categories/add');

  return (
    <>
      <SubHeader title="Categorias" marginBottom={8}>
        <Button onClick={handleAddCategorie}>Nova categoria</Button>
      </SubHeader>
      <Table
        optionsHeader={<Filter />}
        hasSearch
        ariaLabel="Categorias"
        placeholderSearchSuffix="categorias"
      >
        <Thead headers={headers} />
        <Tbody>
          {items.map(item => (
            <Tr key={item.name}>
              <Td>
                <TextTableCell text={item.name} />
              </Td>
              <Td>
                <TextTableCell text={item.description} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default useLayout(Page)(Categories);
