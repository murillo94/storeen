import { memo } from 'react';

import useFont from '../../../hooks/theme/useFont';

import { fontSize14 } from '@storeen/system';

export const Paragraph = memo(
  ({ text = '', color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        <p style={{ ...customStyle }}>{text}</p>

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
