import Button from '../../button';

const TabButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default TabButton;
