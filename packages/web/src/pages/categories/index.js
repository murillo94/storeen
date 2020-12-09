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
  Badge,
  theming
} from '@storeen/components';

import useLayout from '@web/hooks/layout/useLayout';

const headers = ['Nome', 'Identificação'];
const items = [
  {
    name: 'Calças',
    color: theming.colors.blue600
  },
  {
    name: 'Camisetas',
    color: theming.colors.red600
  },
  {
    name: 'Vestidos',
    color: theming.colors.green600
  },
  {
    name: 'Chinelos',
    color: theming.colors.red700
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
                  <Badge
                    sx={{
                      backgroundColor: item.color,
                      borderColor: item.color,
                      color: theming.colors.gray0
                    }}
                  >
                    {item.name}
                  </Badge>
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
