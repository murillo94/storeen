import { Button } from '../../button';

export const MenuItemButton = ({
  children,
  appearance = 'minimal',
  onClick,
  ...props
}) => (
  <Button
    appearance={appearance}
    hasBorder={false}
    paddingY={1}
    paddingX={2}
    sx={{ width: '100%', justifyContent: 'flex-start' }}
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);
