import React, { forwardRef } from 'react';

const Collapse = forwardRef(({ children, content }, ref) => (
  <div className="collapse">
    {content}
    <div ref={ref} className="hidden">
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
));

export default Collapse;
