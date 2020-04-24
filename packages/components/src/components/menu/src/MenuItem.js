import Link from 'next/link';

import { Button } from '../../button';

import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

import { primary } from '@storeen/system';

const buttonStyle = {
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
          border-color: ${theming.colors.purple700};
        }
      `}
    </style>
  </>
);

const MenuItemButton = ({ children, appearance, onClick }) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    paddingY={1}
    paddingX={2}
    sx={buttonStyle}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const MenuItem = ({
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
            background-color: ${theming.colors.gray0};
            border-radius: ${theming.radii[2]};
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
