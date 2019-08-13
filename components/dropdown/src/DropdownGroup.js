import useTheme from 'themes/useTheme';
import { mono0 } from 'themes/colors';

const DropdownGroup = ({
  children,
  appearance = 'minimal',
  id = null,
  hidden = true
}) => {
  const theme = useTheme(appearance);

  return (
    <>
      <ul role="menu" id={id} aria-orientation="vertical" hidden={hidden}>
        {children}
      </ul>

      <style jsx>
        {`
          ul {
            background-color: ${mono0};
            border: 1px solid ${theme.borderColor};
            border-radius: 5px;
            list-style: none;
            padding: 5px;
            margin: 5px 0 0;
            position: absolute;
            right: 0;
            left: auto;
          }
        `}
      </style>
    </>
  );
};

export default DropdownGroup;
