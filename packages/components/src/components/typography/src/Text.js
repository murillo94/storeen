import { memo } from 'react';

import useFont from '../utils/useFont';

import useStyle from '../../../hooks/theme/useStyle';

import { fontSize14 } from '@storeen/system';

export const Text = useStyle(
  memo(({ children, className, styles, color = 'inherit' }) => {
    const fontColor = useFont(color);

    return (
      <span className={className}>
        {children}

        <style jsx>
          {`
             {
              font-size: ${fontSize14};
              line-height: 20px;
              color: ${fontColor};
            }
          `}
        </style>
        {styles}
      </span>
    );
  })
);
