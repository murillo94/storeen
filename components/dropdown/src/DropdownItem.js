const DropdownItem = ({ children }) => (
  <>
    <li role="menuitem">{children}</li>

    <style jsx>
      {`
        li {
          background-color: white;
          padding: 5px;
        }

        li > :global(a) {
          color: inherit;
          text-decoration: none;
        }
      `}
    </style>
  </>
);

export default DropdownItem;
