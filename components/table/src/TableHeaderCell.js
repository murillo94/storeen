const TableHeaderCell = ({ children }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div {
          display: flex;
          align-items: center;
          flex: 1 1 0%;
        }
      `}
    </style>
  </>
);

export default TableHeaderCell;
