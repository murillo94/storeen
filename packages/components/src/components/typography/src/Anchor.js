import { memo } from 'react';

import Link from 'next/link';

import useFont from '../utils/useFont';

import { fontSize14, purple700, primary } from '@storeen/system';

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
              font-size: ${fontSize14};
              color: ${fontColor};
              text-decoration: none;
              outline: 0;
            }

            :focus {
              box-shadow: ${primary};
              border-color: ${purple700};
            }
          `}
        </style>
      </>
    );
  }
);
