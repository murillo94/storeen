/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import dynamic from 'next/dynamic';

const Portal = dynamic(() => import('components/portal'), { ssr: false });

const Overlay = ({ children, id = null, visible = false, onClick = null }) => (
  <>
    {visible && (
      <>
        <Portal id={id}>
          {children}
          <div onClick={onClick} />
        </Portal>

        <style jsx>
          {`
            div {
              background-color: rgba(51, 51, 51, 0.3);
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transition: background-color 0.2s;
              z-index: 1;
              display: none;
            }

            @media (max-width: 746px) {
              div {
                display: block;
              }
            }
          `}
        </style>
      </>
    )}
  </>
);

export default Overlay;
