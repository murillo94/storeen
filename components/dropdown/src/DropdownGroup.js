const DropdownGroup = ({ children, id = null, hidden = true }) => (
  <>
    <ul role="menu" id={id} aria-orientation="vertical" hidden={hidden}>
      {children}
    </ul>

    <style jsx>
      {`
        ul {
          border: 1px solid gray;
          background-color: white;
          list-style: none;
          padding: 5px;
          margin: 5px 0 0;
          position: absolute;
          right: 0;
          left: auto;
        }
      `}
    </style>
  </>
);

export default DropdownGroup;
