import Button from 'components/button';

const buttonStyle = {
  padding: '5px 8px',
  justifyContent: 'flex-start',
  width: '100%'
};

const DropdownItemButton = ({ children, appearance, onClick }) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    customStyle={buttonStyle}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default DropdownItemButton;
