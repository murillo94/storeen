import { Overlay } from '../../overlay';

import { theming } from '../../../theme/theming';

import { borderRadius6 } from '@storeen/system';

export const Dialog = ({
  children,
  role = 'dialog',
  width = '560px',
  ariaLabel = null,
  isVisible = false,
  onClose = null
}) => (
  <>
    <Overlay
      id="dialog"
      isVisible={isVisible}
      shouldRemoveBodyScroll
      onClose={onClose}
    >
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
          background-color: ${theming.colors.gray0};
          border: 1px solid ${theming.colors.gray200};
          border-radius: ${borderRadius6};
          padding: 20px;
          width: ${width};
          max-height: calc(100vh - 56px);
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          z-index: 2;
          display: ${isVisible ? 'flex' : 'none'};
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
