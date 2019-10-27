import { useRef, useEffect } from 'react';

import Button from 'components/button';

import { mono0 } from 'utils/theme/colors';

const Dropdown = ({
  children,
  appearance = 'minimal',
  id = null,
  icon = '',
  text = '',
  visible = false,
  hasBorder = false,
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
          appearance={appearance}
          icon={icon}
          text={text}
          aria-controls={id}
          aria-expanded={visible}
          aria-haspopup="menu"
          hasBorder={hasBorder}
          onClick={onClick}
        />
        {children}
      </div>

      <style jsx>
        {`
          div {
            background-color: ${mono0};
            position: relative;
            z-index: 1;
          }
        `}
      </style>
    </>
  );
};

export default Dropdown;
