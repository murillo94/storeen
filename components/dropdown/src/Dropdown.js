import React, { useRef, useEffect } from 'react';

import Button from 'components/button';

const buttonStyle = {
  border: 'none'
};

const Dropdown = ({
  children,
  content = null,
  id = null,
  icon = '',
  visible = false,
  onClick = null
}) => {
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) return;
    if (visible) onClick();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [visible]);

  return (
    <>
      <div ref={node}>
        <Button
          icon={icon}
          aria-controls={id}
          aria-expanded={visible}
          aria-haspopup="menu"
          customStyle={buttonStyle}
          onClick={onClick}
        >
          <span>{children}</span>
        </Button>
        {content}
      </div>

      <style jsx>
        {`
          div {
            background-color: white;
            position: relative;
          }

          span {
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
};

export default Dropdown;
