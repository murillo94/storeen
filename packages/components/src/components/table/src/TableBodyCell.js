export const TableBodyCell = ({ children }) => (
  <>
    <td>{children}</td>

    <style jsx>
      {`
        td {
          padding: 0 21px;
        }
      `}
    </style>
  </>
);
