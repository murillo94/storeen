import { theming } from '../../../theme/theming';

export const TableRow = ({
  children,
  isBody = true,
  isHover = true,
  onClick = null
}) => (
  <>
    <tr onClick={onClick}>{children}</tr>

    <style jsx>
      {`
        tr {
          background-color: ${theming.colors.gray0};
          border-bottom: 1px solid ${theming.colors.gray100};
          height: 64px;
          cursor: ${onClick ? 'pointer' : 'default'};
        }

        :last-child {
          border-bottom: ${isBody && 'none'};
        }

        :hover {
          background-color: ${isHover && theming.colors.gray75};
        }
      `}
    </style>
  </>
);
