import Container from 'components/container';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({
  children,
  optionsHeader,
  headers = [],
  hasSearch = false
}) => {
  return (
    <Container>
      <TableHead headers={headers} hasSearch={hasSearch}>
        {optionsHeader}
      </TableHead>
      <TableBody>{children}</TableBody>
    </Container>
  );
};

export default Table;
