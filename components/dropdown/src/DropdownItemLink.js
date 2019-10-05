import { memo } from 'react';
import Link from 'next/link';

import { primary } from 'themes/shadows';
import { primary700 } from 'themes/colors';

const DropdownItemLink = memo(({ children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          padding: 5px 8px;
          outline: 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        :focus {
          box-shadow: ${primary};
          border-color: ${primary700};
        }
      `}
    </style>
  </>
));

export default DropdownItemLink;
