import { mono0, mono75, mono100 } from 'themes/colors';

const TableRow = ({ children, isBody = true, hover = true }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div {
          background-color: ${mono0};
          border-bottom: 1px solid ${mono100};
          height: 64px;
          display: flex;
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
