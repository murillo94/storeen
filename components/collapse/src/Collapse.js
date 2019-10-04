import React, { useRef, cloneElement } from 'react';

const Collapse = ({ children, content, action = 'onClick' }) => {
  const collapseRef = useRef(null);

  const handleCollapse = () => {
    collapseRef.current.classList.toggle('visible');
  };

  return (
    <div className="collapse">
      {cloneElement(content, {
        [action]: handleCollapse
      })}
      <div ref={collapseRef} className="hidden">
        {children}
      </div>
      <style jsx>
        {`
          .hidden {
            display: none;
          }

          .visible {
            display: block;
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Collapse;
