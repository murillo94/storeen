import Overlay from '../../overlay';

import { mono0, mono200 } from '@storeen/system/src/utils/theme/colors';
import { radius600 } from '@storeen/system/src/utils/theme/radius';

const Dialog = ({
  children,
  role = 'dialog',
  visible = false,
  ariaLabel = null,
  width = '560px',
  onClose = null
}) => (
  <>
    <Overlay id="dialog" visible={visible} removeBodyScroll onClose={onClose}>
      <div
        role={role}
        className="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        {children}
      </div>
    </Overlay>

    <style jsx>
      {`
        div {
          background-color: ${mono0};
          border: 1px solid ${mono200};
          border-radius: ${radius600};
          padding: 20px;
          width: ${width};
          max-height: calc(100vh - 56px);
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          z-index: 2;
          display: ${visible ? 'flex' : 'none'};
          flex-direction: column;
          justify-content: space-between;
        }

        :global(#dialog) > :global(div) {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0px;
          left: 0px;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default Dialog;
