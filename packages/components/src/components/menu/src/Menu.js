import { useRef, useEffect } from 'react';

import { Button } from '../../button';

import { gray0 } from '@storeen/system';

export const Menu = ({
  children,
  appearance = 'minimal',
  id = null,
  icon = '',
  text = '',
  isVisible = false,
  hasBorder = false,
  onClick = null
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
    <>
      <div ref={node}>
        <Button
          appearance={appearance}
          icon={icon}
          text={text}
          aria-controls={id}
          aria-expanded={isVisible}
          aria-haspopup="menu"
          hasBorder={hasBorder}
          onClick={onClick}
        />
        {children}
      </div>

      <style jsx>
        {`
          div {
            background-color: ${gray0};
            position: relative;
            z-index: 1;
          }
        `}
      </style>
    </>
  );
};
