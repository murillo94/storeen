import { useRef, useEffect } from 'react';

import { Box } from '../../box';
import { Button } from '../../button';

export const Menu = ({
  children,
  appearance = 'minimal',
  id = null,
  icon = '',
  text = '',
  isVisible = false,
  hasBorder = false,
  onClick = null,
  ...props
}) => {
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) return;
    if (isVisible) onClick();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isVisible]);

  return (
    <Box
      ref={node}
      styleConfig={{
        backgroundColor: 'gray0',
        position: 'relative',
        zIndex: '1'
      }}
    >
      <Button
        appearance={appearance}
        icon={icon}
        aria-controls={id}
        aria-expanded={isVisible}
        aria-haspopup="menu"
        hasBorder={hasBorder}
        onClick={onClick}
        {...props}
      >
        {text}
      </Button>
      {children}
    </Box>
  );
};
