import React from 'react';

import { Heading, Table, Thead, Tbody, Tr, Td } from '@storeen/components';
import { Code } from './Code';

export const PropsTable = ({ title = 'Props', data = {} }) => {
  const hasProps = Object.keys(data).length > 0;

  return (
    <>
      <Heading is="h2" marginTop={11} marginBottom={5}>
        {title}
      </Heading>
      {hasProps && (
        <Table>
          <Thead headers={['Prop', 'Type', 'Description']} />
          <Tbody>
            {Object.entries(data).map(([key, value]) => (
              <Tr key={key}>
                <Td>
                  <Code variant="fade">{key}</Code>
                </Td>
                <Td>
                  <Code>{value.type}</Code>
                </Td>
                <Td>{value.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};
