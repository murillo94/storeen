import Button from 'components/button';

const buttonStyle = {
  width: '100%',
  border: 'none'
};

const TabButton = ({ children, onClick }) => (
  <Button customStyle={buttonStyle} onClick={onClick}>
    {children}
  </Button>
);

export default TabButton;
