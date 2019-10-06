import { mono0, mono200 } from 'utils/themes/colors';

const Header = ({ children }) => (
  <>
    <header>{children}</header>

    <style jsx>
      {`
        header {
          background-color: ${mono0};
          border-bottom: 1px solid ${mono200};
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
