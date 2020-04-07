import React from 'react';

import { Heading, Table, TableRow, TableBodyCell } from '@storeen/components';

export function PropsTable({ data = {} }) {
  const hasProps = Object.keys(data).length > 0;

  return (
    <>
      <Heading is="h2" customStyle={{ margin: '65px 0 25px' }}>
        Props
      </Heading>
      {hasProps && (
        <Table headers={['Prop', 'Type', 'Description']}>
          {Object.entries(data).map(([key, value]) => (
            <TableRow key={key}>
              <TableBodyCell>{key}</TableBodyCell>
              <TableBodyCell>{value.type}</TableBodyCell>
              <TableBodyCell>{value.description}</TableBodyCell>
            </TableRow>
          ))}
        </Table>
      )}
    </>
  );
}
