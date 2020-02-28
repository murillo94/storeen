import Link from 'next/link';

import Button from 'components/button';

import useTheme from 'hooks/theme/useTheme';

import { mono0, primary700 } from 'utils/theme/colors';
import { radius500 } from 'utils/theme/radius';
import { primary } from 'utils/theme/shadows';

const buttonStyle = {
  padding: '5px 8px',
  justifyContent: 'flex-start',
  width: '100%'
};

const DropdownItemLink = ({ children, href }) => (
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

const DropdownItemButton = ({ children, appearance, onClick }) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    customStyle={buttonStyle}
    onClick={onClick}
  >
    {children}
  </Button>
);

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
