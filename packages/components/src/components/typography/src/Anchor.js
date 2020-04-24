import { memo } from 'react';

import Link from 'next/link';

import { theming } from '../../../theme/theming';

import useFont from '../utils/useFont';

import { primary } from '@storeen/system';

export const Anchor = memo(
  ({ children, href = '', color = 'inherit', ariaLabel = null }) => {
    const fontColor = useFont(color);

    return (
      <>
        <Link href={href}>
          <a aria-label={ariaLabel}>{children}</a>
        </Link>

        <style jsx>
          {`
            a {
              font-size: ${theming.fontSizes[0]};
              color: ${fontColor};
              text-decoration: none;
              outline: 0;
            }

            :focus {
              box-shadow: ${primary};
              border-color: ${theming.colors.purple700};
            }
          `}
        </style>
      </>
    );
  }
);
