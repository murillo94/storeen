import { memo } from 'react';

import useStyle from '../../../hooks/theme/useStyle';

import { theming } from '../../../theme/theming';

import useFont from '../utils/useFont';

export const Text = useStyle(
  memo(({ children, className, styles, color = 'inherit' }) => {
    const fontColor = useFont(color);

    return (
      <span className={className}>
        {children}

        <style jsx>
          {`
             {
              font-size: ${theming.fontSizes[0]};
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
