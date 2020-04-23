import { memo } from 'react';

import useFont from '../utils/useFont';

import useStyle from '../../../hooks/theme/useStyle';

import { fontSize14 } from '@storeen/system';

export const Paragraph = useStyle(
  memo(({ children, className, styles, color = 'inherit' }) => {
    const fontColor = useFont(color);

    return (
      <p className={className}>
        {children}

        <style jsx>
          {`
             {
              font-size: ${fontSize14};
              line-height: 20px;
              color: ${fontColor};
              margin: 0;
            }
          `}
        </style>
        {styles}
      </p>
    );
  })
);
