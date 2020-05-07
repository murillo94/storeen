import { Box } from '../../box';
import { TableRow } from './TableRow';
import { TableHeadCell } from './TableHeadCell';
import { TextTableCell } from './TextTableCell';

export const TableHead = ({ headers = [], ...props }) => (
  <Box as="thead" {...props}>
    <TableRow isBody={false} isHover={false}>
      {headers.map(title => (
        <TableHeadCell key={title}>
          <TextTableCell
            text={title}
            textCustomStyle={{
              fontWeight: 1
            }}
          />
        </TableHeadCell>
      ))}
    </TableRow>
  </Box>
);
