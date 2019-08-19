import { Input } from 'components/input';
import TableRow from './TableRow';
import TableHeaderCell from './TableHeaderCell';
import TextTableCell from './TextTableCell';

const textHeaderStyle = {
  fontWeight: '500'
};

const TableHead = ({ children, hasSearch = false }) => (
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
              placeholder="Buscar produtos"
            />
          )}
          <div>{children}</div>
        </div>
      )}
      <TableRow hover={false}>
        <TableHeaderCell>
          <TextTableCell text="Nome" textCustomStyle={textHeaderStyle} />
        </TableHeaderCell>
        <TableHeaderCell>
          <TextTableCell text="Preço" textCustomStyle={textHeaderStyle} />
        </TableHeaderCell>
        <TableHeaderCell>
          <TextTableCell text="Estoque" textCustomStyle={textHeaderStyle} />
        </TableHeaderCell>
        <TableHeaderCell>
          <TextTableCell
            text="Visibilidade"
            textCustomStyle={textHeaderStyle}
          />
        </TableHeaderCell>
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
          width: 300px;
        }
      `}
    </style>
  </>
);

export default TableHead;
