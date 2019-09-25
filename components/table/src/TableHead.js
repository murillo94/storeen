import TableRow from './TableRow';
import TableHeadCell from './TableHeadCell';
import TextTableCell from './TextTableCell';

const textHeaderStyle = {
  fontWeight: '500'
};

const TableHead = ({ headers }) => (
  <thead>
    <TableRow isBody={false} hover={false}>
      {headers.map((title, index) => (
        <TableHeadCell key={title} width={index === 0 ? '320px' : ''}>
          <TextTableCell text={title} textCustomStyle={textHeaderStyle} />
        </TableHeadCell>
      ))}
    </TableRow>
  </thead>
);

export default TableHead;
