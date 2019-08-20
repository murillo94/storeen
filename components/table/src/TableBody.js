import Icon from 'components/icon';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TextTableCell from './TextTableCell';

import { positive700 } from 'themes/colors';

const TableBody = () => (
  <div>
    <TableRow>
      <TableCell flexBasis="320px">
        <TextTableCell text="Vestido Blue Denim" />
      </TableCell>
      <TableCell>
        <TextTableCell text="99,00" />
      </TableCell>
      <TableCell>
        <TextTableCell text="9" />
      </TableCell>
      <TableCell>
        <TextTableCell>
          <Icon name="eye" color={positive700} />
        </TextTableCell>
      </TableCell>
    </TableRow>
  </div>
);

export default TableBody;
