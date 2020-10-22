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
  Box
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const headers = ['Nome', 'Cor'];
const items = [
  {
    name: 'Calças',
    color: '#4848fd'
  },
  {
    name: 'Camisetas',
    color: '#ef4040'
  },
  {
    name: 'Vestidos',
    color: '#e6a8b3'
  },
  {
    name: 'Chinelos',
    color: '#a950a9'
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
                <TextTableCell>
                  <Box
                    styleConfig={{
                      backgroundColor: item.color,
                      borderRadius: 1,
                      width: '10px',
                      height: '10px'
                    }}
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

export default useLayout(Page)(Categories);
