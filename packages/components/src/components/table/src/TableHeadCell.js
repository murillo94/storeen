export const TableHeadCell = ({ children }) => (
  <>
    <th>{children}</th>

    <style jsx>
      {`
        th {
          padding: 0 21px;
        }
      `}
    </style>
  </>
);
