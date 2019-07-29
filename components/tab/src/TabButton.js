import Button from '../../button';

const TabButton = ({ children, onClick }) => (
  <Button width="100%" border="none" onClick={onClick}>
    {children}
  </Button>
);

export default TabButton;
