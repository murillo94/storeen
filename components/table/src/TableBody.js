import Icon from 'components/icon';
import { positive700 } from 'themes/colors';
import TableRow from './TableRow';
import TextTableCell from './TextTableCell';

const TableBody = () => (
  <div>
    <TableRow>
      <TextTableCell text="Vestido Blue Denim" />
      <TextTableCell text="99,00" />
      <TextTableCell text="9" />
      <TextTableCell center>
        <Icon name="eye" color={positive700} />
      </TextTableCell>
    </TableRow>
  </div>
);

export default TableBody;
