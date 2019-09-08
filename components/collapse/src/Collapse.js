import React, { forwardRef } from 'react';

const Collapse = forwardRef(({ children, content }, ref) => (
  <>
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
        }
      `}
    </style>
  </>
));

export default Collapse;
