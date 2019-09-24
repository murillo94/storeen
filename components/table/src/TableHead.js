import TableRow from './TableRow';
import TableCell from './TableCell';
import TextTableCell from './TextTableCell';

const textHeaderStyle = {
  fontWeight: '500'
};

const TableHead = ({ headers }) => (
  <TableRow isBody={false} hover={false}>
    {headers.map((title, index) => (
      <TableCell key={title} flexBasis={index === 0 && '320px'}>
        <TextTableCell text={title} textCustomStyle={textHeaderStyle} />
      </TableCell>
    ))}
  </TableRow>
);

export default TableHead;
