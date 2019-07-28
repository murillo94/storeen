import Button from '../../button';

const DropdownItemButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default DropdownItemButton;
