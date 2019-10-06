import { mono0, mono75, mono100 } from 'utils/themes/colors';

const TableRow = ({ children, isBody = true, hover = true }) => (
  <>
    <tr>{children}</tr>

    <style jsx>
      {`
        tr {
          background-color: ${mono0};
          border-bottom: 1px solid ${mono100};
          height: 64px;
        }

        :last-child {
          border-bottom: ${isBody && 'none'};
        }

        :hover {
          background-color: ${hover && mono75};
        }
      `}
    </style>
  </>
);

export default TableRow;
