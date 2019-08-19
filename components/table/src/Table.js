import React, { useState } from 'react';

import Container from 'components/container';
import { Dropdown, DropdownGroup, DropdownItem } from 'components/dropdown';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Filter = ({ id, hidden }) => (
  <DropdownGroup id={id} hidden={hidden}>
    <DropdownItem>teste1</DropdownItem>
    <DropdownItem>teste2</DropdownItem>
  </DropdownGroup>
);

const Table = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);

  return (
    <Container>
      <TableHead hasSearch>
        <Dropdown
          id="filter"
          visible={visibleFilter}
          hasBorder
          appearance="minimal"
          icon="filter"
          text="Filtrar"
          onClick={() => setVisibleFilter(!visibleFilter)}
        >
          <Filter id="filter" hidden={!visibleFilter} />
        </Dropdown>
      </TableHead>
      <TableBody />
    </Container>
  );
};

export default Table;
