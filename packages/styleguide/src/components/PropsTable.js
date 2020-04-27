import React from 'react';

import { Heading, Table, TableRow, TableBodyCell } from '@storeen/components';
import { Code } from './Code';

export const PropsTable = ({ title = 'Props', data = {} }) => {
  const hasProps = Object.keys(data).length > 0;

  return (
    <>
      <Heading is="h2" sx={{ margin: '60px 0 25px' }}>
        {title}
      </Heading>
      {hasProps && (
        <Table headers={['Prop', 'Type', 'Description']}>
          {Object.entries(data).map(([key, value]) => (
            <TableRow key={key}>
              <TableBodyCell>
                <Code variant="fade">{key}</Code>
              </TableBodyCell>
              <TableBodyCell>
                <Code>{value.type}</Code>
              </TableBodyCell>
              <TableBodyCell>{value.description}</TableBodyCell>
            </TableRow>
          ))}
        </Table>
      )}
    </>
  );
};
