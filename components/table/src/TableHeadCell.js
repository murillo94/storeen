const WIDTH = '145px';

const TableHeadCell = ({ children, width = WIDTH }) => (
  <>
    <th>{children}</th>

    <style jsx>
      {`
        th {
          padding-right: 20px;
          width: ${width || WIDTH};
        }

        @media (max-width: 746px) {
          th {
            min-width: ${width || WIDTH};
          }
        }
      `}
    </style>
  </>
);

export default TableHeadCell;
