import useTheme from 'themes/useTheme';

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
            border: 1px solid ${theme.borderColor};
            background-color: white;
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
