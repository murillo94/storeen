const TabList = ({
  children,
  ariaLabel = 'Menu lateral',
  customStyle = {}
}) => (
  <>
    <ul
      role="tablist"
      aria-orientation="vertical"
      aria-label={ariaLabel}
      style={{ ...customStyle }}
    >
      {children}
    </ul>

    <style jsx>
      {`
        ul {
          background-color: transparent;
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </>
);

export default TabList;
