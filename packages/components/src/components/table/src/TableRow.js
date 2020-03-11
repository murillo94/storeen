import { mono0, mono75, mono100 } from '@storeen/system/src/utils/theme/colors';

export const TableRow = ({
  children,
  isBody = true,
  hover = true,
  onClick = null
}) => (
  <>
    <tr onClick={onClick}>{children}</tr>

    <style jsx>
      {`
        tr {
          background-color: ${mono0};
          border-bottom: 1px solid ${mono100};
          height: 64px;
          cursor: ${onClick ? 'pointer' : 'default'};
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
