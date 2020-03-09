import { useRef, useEffect, cloneElement } from 'react';

const Disclosure = ({
  children,
  content,
  isOpen = false,
  hasMarginBottom = false,
  action = 'onClick'
}) => {
  const disclosureRef = useRef(null);

  const handleDisclosure = e => {
    disclosureRef.current.toggleAttribute('hidden');

    if (e && e.currentTarget && e.currentTarget.getAttribute('aria-expanded')) {
      const isExpanded =
        e.currentTarget.getAttribute('aria-expanded') === 'true';
      e.currentTarget.setAttribute('aria-expanded', !isExpanded);
    }
  };

  useEffect(() => {
    if (content) {
      const { checked, value } = content.props;

      if (checked || value) {
        handleDisclosure();
      }
    }
  }, []);

  return (
    <div className="disclosure">
      {content &&
        cloneElement(content, {
          [action]: e => {
            if (content.props[action]) content.props[action](e);
            handleDisclosure(e);
          },
          ...(action !== 'onChange' && {
            'aria-expanded':
              content.props.checked || content.props.value || isOpen
          })
        })}
      <div ref={disclosureRef} role="region" hidden={!isOpen}>
        {children}
      </div>
      <style jsx>
        {`
          .disclosure {
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

export default Disclosure;
