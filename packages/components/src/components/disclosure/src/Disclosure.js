import { useRef, useEffect, cloneElement, useCallback } from 'react';

import { Box } from '../../box';

export const Disclosure = ({
  children,
  as,
  isVisible = false,
  hasMarginBottom = false,
  ...props
}) => {
  const disclosureRef = useRef(null);
  const mainAction = as?.props?.onChange?.name || 'onClick';

  const handleDisclosure = useCallback(e => {
    disclosureRef.current.toggleAttribute('hidden');

    if (e && e.currentTarget && e.currentTarget.getAttribute('aria-expanded')) {
      const isExpanded =
        e.currentTarget.getAttribute('aria-expanded') === 'true';
      e.currentTarget.setAttribute('aria-expanded', !isExpanded);
    }
  });

  useEffect(() => {
    if (as) {
      const { isChecked } = as.props;

      if (isChecked) {
        handleDisclosure();
      }
    }
  }, []);

  return (
    <Box marginBottom={hasMarginBottom ? 4 : 0} {...props}>
      {as &&
        cloneElement(as, {
          [mainAction]: e => {
            if (as.props[mainAction]) as.props[mainAction](e);
            handleDisclosure(e);
          },
          'aria-expanded': as.props.isChecked || isVisible
        })}
      <Box ref={disclosureRef} role="region" hidden={!isVisible} marginTop={4}>
        {children}
      </Box>
    </Box>
  );
};
