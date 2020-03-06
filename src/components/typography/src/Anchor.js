import { memo } from 'react';

import Link from 'next/link';

import useFont from 'hooks/theme/useFont';

import { primary } from 'utils/theme/shadows';
import { primary700 } from 'utils/theme/colors';

const Anchor = memo(
  ({ href = '', text = '', color = 'inherit', hover = true }) => {
    const fontColor = useFont(color);

    return (
      <>
        <Link href={href}>
          <a aria-label={text}>{text}</a>
        </Link>

        <style jsx>
          {`
            a {
              font-size: 14px;
              color: ${fontColor};
              text-decoration: none;
              outline: 0;
            }

            :hover {
              text-decoration: ${hover && 'underline'};
            }

            :focus {
              box-shadow: ${primary};
              border-color: ${primary700};
            }
          `}
        </style>
      </>
    );
  }
);

export default Anchor;
