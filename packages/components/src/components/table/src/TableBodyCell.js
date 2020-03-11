const TableBodyCell = ({ children }) => (
  <>
    <td>{children}</td>

    <style jsx>
      {`
        td {
          padding: 0 21px;
          width: 145px;
        }

        td:first-child {
          width: 320px;
        }

        @media (max-width: 746px) {
          td {
            min-width: 145px;
          }

          td:first-child {
            min-width: 320px;
          }
        }
      `}
    </style>
  </>
);

export default TableBodyCell;
