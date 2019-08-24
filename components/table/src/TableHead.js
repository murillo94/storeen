import { Input } from 'components/input';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TextTableCell from './TextTableCell';

import { mono75 } from 'themes/colors';

const textHeaderStyle = {
  fontWeight: '500'
};

const TableHead = ({
  children,
  headers,
  hasSearch,
  placeholderSearchSuffix
}) => (
  <>
    <div>
      {(children || hasSearch) && (
        <div className="header-options">
          {hasSearch && (
            <Input
              type="search"
              id="search-product"
              name="search-product"
              icon="search"
              placeholder={`Buscar ${placeholderSearchSuffix}`}
            />
          )}
          <div>{children}</div>
        </div>
      )}
      <TableRow isBody={false} hover={false}>
        {headers.map((title, index) => (
          <TableCell key={title} flexBasis={index === 0 && '320px'}>
            <TextTableCell text={title} textCustomStyle={textHeaderStyle} />
          </TableCell>
        ))}
      </TableRow>
    </div>

    <style jsx>
      {`
        .header-options {
          margin-bottom: 35px;
          display: flex;
          justify-content: space-between;
          align-itens: center;
        }

        .header-options :global(input) {
          background-color: ${mono75};
          border-color: ${mono75};
          width: 300px;
        }

        .header-options :global(button[type='submit']) {
          background-color: ${mono75};
          border-color: ${mono75};
        }
      `}
    </style>
  </>
);

export default TableHead;
