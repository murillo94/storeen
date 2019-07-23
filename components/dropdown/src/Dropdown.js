import React, { useRef, useEffect } from 'react';

import Button from '../../button';

const Dropdown = ({
  children,
  content,
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
        <Button icon={icon} border="none" onClick={onClick}>
          <span>{children}</span>
        </Button>
        {visible && <div>{content}</div>}
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
