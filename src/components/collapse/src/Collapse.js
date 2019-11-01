import { useRef, useEffect, cloneElement } from 'react';

const Collapse = ({
  children,
  content,
  hasMarginBottom = false,
  action = 'onClick'
}) => {
  const collapseRef = useRef(null);

  const handleCollapse = () => {
    collapseRef.current.classList.toggle('visible');
  };

  useEffect(() => {
    const { checked, value } = content.props;
    if (checked || value) {
      handleCollapse();
    }
  }, []);

  return (
    <div className="collapse">
      {cloneElement(content, {
        [action]: e => {
          if (content.props[action]) content.props[action](e);
          handleCollapse();
        }
      })}
      <div ref={collapseRef} className="hidden">
        {children}
      </div>
      <style jsx>
        {`
          .collapse {
            margin-bottom: ${hasMarginBottom && '20px'};
          }

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
