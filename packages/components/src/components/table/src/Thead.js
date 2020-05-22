import { Box } from '../../box';
import { Tr } from './Tr';
import { Th } from './Th';
import { TextTableCell } from './TextTableCell';

export const Thead = ({ headers = [], ...props }) => (
  <Box
    as="thead"
    styleConfig={{
      backgroundColor: 'gray0',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray200'
    }}
    {...props}
  >
    <Tr hasHover={false}>
      {headers.map(title => (
        <Th key={title}>
          <TextTableCell
            text={title}
            textCustomStyle={{
              fontWeight: 1
            }}
          />
        </Th>
      ))}
    </Tr>
  </Box>
);
