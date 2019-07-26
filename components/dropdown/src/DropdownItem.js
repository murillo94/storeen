const DropdownItem = ({ children }) => (
  <>
    <li role="menuitem">{children}</li>

    <style jsx>
      {`
        li {
          background-color: white;
          padding: 5px;
        }
      `}
    </style>
  </>
);

export default DropdownItem;
