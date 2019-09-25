const WIDTH = '145px';

const TableBodyCell = ({ children, width = WIDTH }) => (
  <>
    <td>{children}</td>

    <style jsx>
      {`
        td {
          padding-right: 20px;
          width: ${width || WIDTH};
        }

        @media (max-width: 746px) {
          td {
            min-width: ${width || WIDTH};
          }
        }
      `}
    </style>
  </>
);

export default TableBodyCell;
