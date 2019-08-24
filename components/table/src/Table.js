import Container from 'components/container';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({
  children,
  optionsHeader,
  headers = [],
  hasSearch = false,
  placeholderSearchSuffix = ''
}) => {
  return (
    <Container>
      <TableHead
        headers={headers}
        hasSearch={hasSearch}
        placeholderSearchSuffix={placeholderSearchSuffix}
      >
        {optionsHeader}
      </TableHead>
      <TableBody>{children}</TableBody>
    </Container>
  );
};

export default Table;
