import Button from 'components/button';

const DropdownItemButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default DropdownItemButton;
