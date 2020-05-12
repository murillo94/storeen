import { memo } from 'react';
import Link from 'next/link';

import { Box } from '../../box';

import useFont from '../utils/useFont';

export const Anchor = memo(
  ({ children, href = '', color = 'inherit', ariaLabel = null, ...props }) => {
    const fontColor = useFont(color);

    return (
      <Link href={href} passHref>
        <Box
          as="a"
          aria-label={ariaLabel}
          styleConfig={{
            fontSize: 0,
            color: fontColor,
            textDecoration: 'none',
            outline: 0,
            '&:focus': {
              boxShadow: 0,
              borderColor: 'purple700'
            }
          }}
          {...props}
        >
          {children}
        </Box>
      </Link>
    );
  }
);
