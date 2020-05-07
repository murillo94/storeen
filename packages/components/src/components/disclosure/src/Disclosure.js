import { useRef, useEffect, cloneElement } from 'react';

import { Box } from '../../box';

export const Disclosure = ({
  children,
  content,
  isVisible = false,
  hasMarginBottom = false,
  action = 'onClick',
  ...props
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
    <Box marginBottom={hasMarginBottom ? 4 : 0} {...props}>
      {content &&
        cloneElement(content, {
          [action]: e => {
            if (content.props[action]) content.props[action](e);
            handleDisclosure(e);
          },
          ...(action !== 'onChange' && {
            'aria-expanded':
              content.props.checked || content.props.value || isVisible
          })
        })}
      <Box
        ref={disclosureRef}
        role="region"
        hidden={!isVisible}
        marginTop={!isVisible ? 4 : 0}
      >
        {children}
      </Box>
    </Box>
  );
};
