import { memo } from 'react';

import useFont from '../utils/useFont';

import useStyle from '../../../hooks/theme/useStyle';

import { fontSize14 } from '@storeen/system';

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
                font-size: ${fontSize14};
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
