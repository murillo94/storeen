import { useRef, useEffect, cloneElement } from 'react';

const Collapse = ({
  children,
  content,
  isOpen = false,
  hasMarginBottom = false,
  action = 'onClick'
}) => {
  const collapseRef = useRef(null);

  const handleCollapse = e => {
    collapseRef.current.toggleAttribute('hidden');

    if (e && e.currentTarget) {
      const isExpanded =
        e.currentTarget.getAttribute('aria-expanded') === 'true';
      e.currentTarget.setAttribute('aria-expanded', !isExpanded);
    }
  };

  useEffect(() => {
    if (content) {
      const { checked, value } = content.props;

      if (checked || value) {
        handleCollapse();
      }
    }
  }, []);

  return (
    <div className="collapse">
      {content &&
        cloneElement(content, {
          [action]: e => {
            if (content.props[action]) content.props[action](e);
            handleCollapse(e);
          },
          'aria-expanded':
            content.props.checked || content.props.value || isOpen
        })}
      <div ref={collapseRef} role="region" hidden={!isOpen}>
        {children}
      </div>
      <style jsx>
        {`
          .collapse {
            margin-bottom: ${hasMarginBottom && '20px'};
          }

          div[role='region']:not([hidden='true']) {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Collapse;
