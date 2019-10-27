import Button from 'components/button';

const buttonStyle = {
  width: '100%'
};

const TabButton = ({ children, onClick }) => (
  <Button hasBorder={false} customStyle={buttonStyle} onClick={onClick}>
    {children}
  </Button>
);

export default TabButton;
