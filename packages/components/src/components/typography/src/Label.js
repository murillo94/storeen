import { memo } from 'react';

import useStyle from '../../../hooks/theme/useStyle';

import { theming } from '../../../theme/theming';

import useFont from '../utils/useFont';

export const Label = useStyle(
  memo(
    ({
      children,
      className,
      styles,
      id = null,
      htmlFor = null,
      color = 'inherit'
    }) => {
      const fontColor = useFont(color);

      return (
        <label className={className} id={id} htmlFor={htmlFor}>
          {children}

          <style jsx>
            {`
               {
                font-size: ${theming.fontSizes[0]};
                color: ${fontColor};
                text-align: left;
                margin-bottom: 5px;
                display: block;
              }
            `}
          </style>
          {styles}
        </label>
      );
    }
  )
);
