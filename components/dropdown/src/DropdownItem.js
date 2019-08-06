import DropdownItemLink from './DropdownItemLink';
import DropdownItemButton from './DropdownItemButton';

const DropdownItem = ({ children, href = '/', onClick = null }) => (
  <>
    <li role="menuitem">
      {href ? (
        <DropdownItemLink href={href}>{children}</DropdownItemLink>
      ) : (
        <DropdownItemButton onClick={onClick}>{children}</DropdownItemButton>
      )}
    </li>

    <style jsx>
      {`
        li {
          background-color: white;
          margin: 2px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        li:hover {
          background-color: gray;
          color: white;
          opacity: 0.6;
        }
      `}
    </style>
  </>
);

export default DropdownItem;
