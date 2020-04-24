import useTheme from '../../../hooks/theme/useTheme';

import { theming } from '../../../theme/theming';

export const MenuGroup = ({
  children,
  appearance = 'minimal',
  id = null,
  isVisible = true
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <ul role="menu" id={id} aria-orientation="vertical" hidden={isVisible}>
        {children}
      </ul>

      <style jsx>
        {`
          ul {
            background-color: ${theming.colors.gray0};
            border: 1px solid ${theme.borderColor};
            border-radius: ${theming.radii[2]};
            list-style: none;
            padding: 5px;
            margin: 5px 0 0;
            min-width: 110px;
            width: 100%;
            position: absolute;
            right: 0;
            left: auto;
          }
        `}
      </style>
    </>
  );
};
