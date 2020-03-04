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
          padding: 20px 0 10px;
          width: ${width};
          max-height: calc(100vh - 56px);
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2;
          display: ${visible ? 'flex' : 'none'};
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }
      `}
    </style>
  </>
);

export default Dialog;
