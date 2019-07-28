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
          padding: 5px;
        }
      `}
    </style>
  </>
);

export default DropdownItem;
