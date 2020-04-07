import useTheme from '../../../utils/theme/useTheme';

import { gray0, borderRadius5 } from '@storeen/system';

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
            background-color: ${gray0};
            border: 1px solid ${theme.borderColor};
            border-radius: ${borderRadius5};
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
