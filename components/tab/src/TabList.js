import { mono0 } from 'themes/colors';

const TabList = ({ children, ariaLabel = 'Menu lateral' }) => (
  <>
    <ul role="tablist" aria-orientation="vertical" aria-label={ariaLabel}>
      {children}
    </ul>

    <style jsx>
      {`
        ul {
          background-color: ${mono0};
          list-style: none;
          padding: 0;
        }
      `}
    </style>
  </>
);

export default TabList;
