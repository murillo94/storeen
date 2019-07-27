const Header = ({ children }) => (
  <>
    <header>{children}</header>

    <style jsx>
      {`
        header {
          background-color: white;
          border-bottom: 1px solid gray;
          padding: 10px;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    </style>
  </>
);

export default Header;
