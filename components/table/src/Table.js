import Container from 'components/container';
import TableOptions from './TableOptions';
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
      <TableOptions
        hasSearch={hasSearch}
        placeholderSearchSuffix={placeholderSearchSuffix}
      >
        {optionsHeader}
      </TableOptions>
      <TableHead headers={headers} />
      <TableBody>{children}</TableBody>
    </Container>
  );
};

export default Table;
