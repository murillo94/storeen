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
          {hasSearch && <div>search</div>}
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
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-itens: center;
        }
      `}
    </style>
  </>
);

export default TableHead;
