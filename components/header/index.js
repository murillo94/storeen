const Header = () => (
  <>
    <header>teste header</header>
    <style jsx>
      {`
        header {
          background-color: white;
          border-bottom: 1px solid gray;
          padding: 15px;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 1;
        }
      `}
    </style>
  </>
);

export default Header;
