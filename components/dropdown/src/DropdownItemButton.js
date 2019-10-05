import { memo } from 'react';

import Button from 'components/button';

const buttonStyle = {
  border: 'none',
  padding: '5px 8px',
  justifyContent: 'flex-start',
  width: '100%'
};

const DropdownItemButton = memo(({ children, appearance, onClick }) => (
  <Button appearance={appearance} customStyle={buttonStyle} onClick={onClick}>
    {children}
  </Button>
));

export default DropdownItemButton;
