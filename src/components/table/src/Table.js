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
    <>
      <Container>
        <TableOptions
          hasSearch={hasSearch}
          placeholderSearchSuffix={placeholderSearchSuffix}
        >
          {optionsHeader}
        </TableOptions>
        <div>
          <table>
            <TableHead headers={headers} />
            <TableBody>{children}</TableBody>
          </table>
        </div>
      </Container>

      <style jsx>
        {`
          div {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
          }

          table {
            border-collapse: collapse;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Table;
