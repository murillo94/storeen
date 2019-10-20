import DropdownItemLink from './DropdownItemLink';
import DropdownItemButton from './DropdownItemButton';

import useTheme from 'hooks/themes/useTheme';

import { mono0 } from 'utils/themes/colors';
import { radius500 } from 'utils/themes/radius';

const DropdownItem = ({
  children,
  appearance = 'minimal',
  href = '',
  onClick = null
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <li role="menuitem">
        {href ? (
          <DropdownItemLink href={href}>{children}</DropdownItemLink>
        ) : (
          <DropdownItemButton appearance={appearance} onClick={onClick}>
            {children}
          </DropdownItemButton>
        )}
      </li>

      <style jsx>
        {`
          li {
            background-color: ${mono0};
            border-radius: ${radius500};
            margin: 3px 0;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          :hover {
            background-color: ${theme.hover.backgroundColor};
            color: ${theme.hover.color};
          }
        `}
      </style>
    </>
  );
};

export default DropdownItem;
