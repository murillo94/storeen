import { TableRow } from './TableRow';
import { TableHeadCell } from './TableHeadCell';
import { TextTableCell } from './TextTableCell';

import { theming } from '../../../theme/theming';

const textHeaderStyle = {
  fontWeight: theming.fontWeights[1]
};

export const TableHead = ({ headers = [] }) => (
  <thead>
    <TableRow isBody={false} isHover={false}>
      {headers.map(title => (
        <TableHeadCell key={title}>
          <TextTableCell text={title} textCustomStyle={textHeaderStyle} />
        </TableHeadCell>
      ))}
    </TableRow>
  </thead>
);
