import { memo } from 'react';

import useFont from '../../../hooks/theme/useFont';

export const Text = memo(
  ({ text = '', color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        <span style={{ ...customStyle }}>{text}</span>

        <style jsx>
          {`
            span {
              font-size: 14px;
              line-height: 20px;
              color: ${fontColor};
            }
          `}
        </style>
      </>
    );
  }
);
