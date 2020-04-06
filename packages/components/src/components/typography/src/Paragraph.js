import { memo } from 'react';

import useFont from '../utils/useFont';

import { fontSize14 } from '@storeen/system';

export const Paragraph = memo(
  ({ children, color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        <p style={{ ...customStyle }}>{children}</p>

        <style jsx>
          {`
            p {
              font-size: ${fontSize14};
              line-height: 20px;
              color: ${fontColor};
              margin: 0 0 10px;
            }
          `}
        </style>
      </>
    );
  }
);
