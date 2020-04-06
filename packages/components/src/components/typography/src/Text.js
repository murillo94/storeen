import { memo } from 'react';

import useFont from '../utils/useFont';

import { fontSize14 } from '@storeen/system';

export const Text = memo(
  ({ children, color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        <span style={{ ...customStyle }}>{children}</span>

        <style jsx>
          {`
            span {
              font-size: ${fontSize14};
              line-height: 20px;
              color: ${fontColor};
            }
          `}
        </style>
      </>
    );
  }
);
