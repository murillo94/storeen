import { memo } from 'react';

import useFont from '../../../hooks/theme/useFont';

import { fontSize14 } from '@storeen/system';

export const Text = memo(
  ({ text = '', color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        <span style={{ ...customStyle }}>{text}</span>

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
