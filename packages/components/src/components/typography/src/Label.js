import { memo } from 'react';

import useFont from '../utils/useFont';

import { fontSize14 } from '@storeen/system';

export const Label = memo(
  ({
    children,
    id = null,
    htmlFor = null,
    color = 'inherit',
    customStyle = {}
  }) => {
    const fontColor = useFont(color);

    return (
      <>
        <label id={id} htmlFor={htmlFor} style={{ ...customStyle }}>
          {children}
        </label>

        <style jsx>
          {`
            label {
              font-size: ${fontSize14};
              color: ${fontColor};
              text-align: left;
              margin-bottom: 5px;
              display: block;
            }
          `}
        </style>
      </>
    );
  }
);
