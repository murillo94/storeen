import Link from 'next/link';

import Button from '../../button';

import useTheme from '@storeen/system/src/hooks/theme/useTheme';

import { mono0, primary700 } from '@storeen/system/src/utils/theme/colors';
import { radius500 } from '@storeen/system/src/utils/theme/radius';
import { primary } from '@storeen/system/src/utils/theme/shadows';

const buttonStyle = {
  padding: '5px 8px',
  justifyContent: 'flex-start',
  width: '100%'
};

const MenuItemLink = ({ children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          padding: 5px 8px;
          outline: 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        :focus {
          box-shadow: ${primary};
          border-color: ${primary700};
        }
      `}
    </style>
  </>
);

const MenuItemButton = ({ children, appearance, onClick }) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    customStyle={buttonStyle}
    onClick={onClick}
  >
    {children}
  </Button>
);

const MenuItem = ({
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
          <MenuItemLink href={href}>{children}</MenuItemLink>
        ) : (
          <MenuItemButton appearance={appearance} onClick={onClick}>
            {children}
          </MenuItemButton>
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

export default MenuItem;
