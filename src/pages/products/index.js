import { useState } from 'react';
import Router from 'next/router';

import Page from 'layouts/adminContent';

import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import SubHeader from 'components/subHeader';
import Button from 'components/button';
import {
  Table,
  TableRow,
  TableBodyCell,
  TextTableCell
} from 'components/table';
import Icon from 'components/icon';

import useLayout from 'hooks/layouts/useLayout';

import { positive700, negative700 } from 'utils/themes/colors';

const headers = ['Nome', 'Preço', 'Estoque', 'Visibilidade'];
const items = [
  {
    name: 'Vestido Blue Denim',
    price: 99.0,
    stock: 9,
    visible: true
  },
  {
    name: 'Vestido Yellow Denim',
    price: 89.0,
    stock: 3,
    visible: false
  },
  {
    name: 'Vestido Pink Denim',
    price: 79.0,
    stock: 5,
    visible: true
  },
  {
    name: 'Vestido Red Denim',
    price: 109.0,
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
    <Dropdown
      id="filter"
      visible={visibleFilter}
      hasBorder
      appearance="minimal"
      icon="filter"
      text="Filtrar"
      onClick={handleClickFilter}
    >
      <DropdownGroup id="filter" hidden={!visibleFilter}>
        <DropdownItem>teste1</DropdownItem>
        <DropdownItem>teste2</DropdownItem>
      </DropdownGroup>
    </Dropdown>
  );
};

const Products = () => {
  const handleAddProduct = () => Router.push('/products/add');

  return (
    <>
      <SubHeader title="Produtos">
        <Button text="Novo produto" onClick={handleAddProduct} />
      </SubHeader>
      <Table
        headers={headers}
        optionsHeader={<Filter />}
        hasSearch
        placeholderSearchSuffix="produtos"
      >
        {items.map(item => (
          <TableRow key={item.name}>
            <TableBodyCell>
              <TextTableCell text={item.name} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.price} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell text={item.stock} />
            </TableBodyCell>
            <TableBodyCell>
              <TextTableCell>
                <Icon
                  name="eye"
                  color={item.visible ? positive700 : negative700}
                />
              </TextTableCell>
            </TableBodyCell>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default useLayout(Page)(Products);
