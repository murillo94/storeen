const TabList = ({ children }) => (
  <>
    <ul>{children}</ul>

    <style jsx>
      {`
        ul {
          background-color: white;
          list-style: none;
          padding: 0;
        }
      `}
    </style>
  </>
);

export default TabList;
