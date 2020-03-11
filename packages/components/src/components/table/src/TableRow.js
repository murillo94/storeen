import { gray0, gray75, gray100 } from '@storeen/system';

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
          background-color: ${gray0};
          border-bottom: 1px solid ${gray100};
          height: 64px;
          cursor: ${onClick ? 'pointer' : 'default'};
        }

        :last-child {
          border-bottom: ${isBody && 'none'};
        }

        :hover {
          background-color: ${hover && gray75};
        }
      `}
    </style>
  </>
);
