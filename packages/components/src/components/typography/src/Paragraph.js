import { memo } from 'react';

import useStyle from '../../../hooks/theme/useStyle';

import { theming } from '../../../theme/theming';

import useFont from '../utils/useFont';

export const Paragraph = useStyle(
  memo(({ children, className, styles, color = 'inherit' }) => {
    const fontColor = useFont(color);

    return (
      <p className={className}>
        {children}

        <style jsx>
          {`
             {
              font-size: ${theming.fontSizes[0]};
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
