import useTheme from 'themes/useTheme';
import { mono0 } from 'themes/colors';
import DropdownItemLink from './DropdownItemLink';
import DropdownItemButton from './DropdownItemButton';

const DropdownItem = ({
  children,
  appearance = 'minimal',
  href = '/',
  onClick = null
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <li role="menuitem">
        {href ? (
          <DropdownItemLink href={href}>{children}</DropdownItemLink>
        ) : (
          <DropdownItemButton onClick={onClick}>{children}</DropdownItemButton>
        )}
      </li>

      <style jsx>
        {`
          li {
            background-color: ${mono0};
            border-radius: 4px;
            margin: 2px 0;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          li:hover {
            background-color: ${theme.hover.backgroundColor};
            color: ${theme.hover.color};
          }
        `}
      </style>
    </>
  );
};

export default DropdownItem;
