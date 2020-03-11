import { TableRow } from './TableRow';
import { TableHeadCell } from './TableHeadCell';
import { TextTableCell } from './TextTableCell';

import { fontWeight500 } from '@storeen/system';

const textHeaderStyle = {
  fontWeight: fontWeight500
};

export const TableHead = ({ headers = [] }) => (
  <thead>
    <TableRow isBody={false} hover={false}>
      {headers.map(title => (
        <TableHeadCell key={title}>
          <TextTableCell text={title} textCustomStyle={textHeaderStyle} />
        </TableHeadCell>
      ))}
    </TableRow>
  </thead>
);
