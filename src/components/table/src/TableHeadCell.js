const TableHeadCell = ({ children }) => (
  <>
    <th>{children}</th>

    <style jsx>
      {`
        th {
          padding: 0 21px;
          width: 145px;
        }

        th:first-child {
          width: 320px;
        }

        @media (max-width: 746px) {
          th {
            min-width: 145px;
          }

          th:first-child {
            min-width: 320px;
          }
        }
      `}
    </style>
  </>
);

export default TableHeadCell;
