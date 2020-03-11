import { Container } from '../../container';
import { TableOptions } from './TableOptions';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

export const Table = ({
  children,
  title = '',
  optionsTitle,
  optionsHeader,
  headers = [],
  hasBoxShadow = true,
  hasBorder = false,
  hasSearch = false,
  ariaLabel = null,
  placeholderSearchSuffix = ''
}) => {
  return (
    <>
      <Container
        title={title}
        optionsTitle={optionsTitle}
        padding="0px"
        hasBoxShadow={hasBoxShadow}
        hasBorder={hasBorder}
      >
        {(optionsHeader || hasSearch) && (
          <TableOptions
            hasSearch={hasSearch}
            placeholderSearchSuffix={placeholderSearchSuffix}
          >
            {optionsHeader}
          </TableOptions>
        )}
        <div>
          <table aria-label={title || ariaLabel}>
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
