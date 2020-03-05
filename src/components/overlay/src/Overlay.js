/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import preventBodyScroll from '../utils/preventBodyScroll';

const Portal = dynamic(() => import('components/portal'), { ssr: false });

const Overlay = ({
  children,
  id = null,
  visible = false,
  removeBodyScroll = false,
  onClose = null
}) => {
  const handleBodyScroll = preventScroll => {
    if (removeBodyScroll && visible) {
      preventBodyScroll(preventScroll);
    }
  };

  useEffect(() => {
    handleBodyScroll(true);

    return () => {
      handleBodyScroll(false);
    };
  }, [visible]);

  return (
    <>
      {visible && (
        <>
          <Portal id={id}>
            {children}
            <div onClick={onClose} />
          </Portal>

          <style jsx>
            {`
              div {
                background-color: rgba(51, 51, 51, 0.3);
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                transition: background-color 0.2s;
                z-index: 1;
                display: ${visible ? 'block' : 'none'};
              }
            `}
          </style>
        </>
      )}
    </>
  );
};

export default Overlay;
