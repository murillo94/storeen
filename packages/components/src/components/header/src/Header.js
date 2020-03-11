import { gray0, gray200 } from '@storeen/system';

export const Header = ({ children }) => (
  <>
    <header>{children}</header>

    <style jsx>
      {`
        header {
          background-color: ${gray0};
          border-bottom: 1px solid ${gray200};
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
