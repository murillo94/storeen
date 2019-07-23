const DropdownItem = ({ children }) => (
  <>
    <li>{children}</li>

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
