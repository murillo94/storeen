import Overlay from 'components/overlay';

import { mono0, mono200 } from 'utils/theme/colors';

const Dialog = ({
  children,
  visible = false,
  width = '560px',
  onClick = null
}) => (
  <>
    <Overlay id="dialog" visible={visible} removeBodyScroll onClick={onClick}>
      <div role="dialog" className="dialog">
        {children}
      </div>
    </Overlay>

    <style jsx>
      {`
        div {
          background-color: ${mono0};
          border-right: 1px solid ${mono200};
          text-align: center;
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
