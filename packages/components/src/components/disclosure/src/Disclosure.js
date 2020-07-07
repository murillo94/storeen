import { useRef, useEffect, cloneElement, useCallback } from 'react';

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

  const handleDisclosure = useCallback(e => {
    disclosureRef.current.toggleAttribute('hidden');

    if (e && e.currentTarget && e.currentTarget.getAttribute('aria-expanded')) {
      const isExpanded =
        e.currentTarget.getAttribute('aria-expanded') === 'true';
      e.currentTarget.setAttribute('aria-expanded', !isExpanded);
    }
  });

  useEffect(() => {
    if (content) {
      const { isCheked, value } = content.props;

      if (action === 'onChange' && isCheked) {
        handleDisclosure();
      }

      if (action !== 'onChange' && value) {
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
          'aria-expanded': content.props.isCheked || isVisible
        })}
      <Box ref={disclosureRef} role="region" hidden={!isVisible} marginTop={4}>
        {children}
      </Box>
    </Box>
  );
};
