import { theming } from '../../../theme/theming';

export const Header = ({ children }) => (
  <>
    <header>{children}</header>

    <style jsx>
      {`
        header {
          background-color: ${theming.colors.gray0};
          border-bottom: 1px solid ${theming.colors.gray200};
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
