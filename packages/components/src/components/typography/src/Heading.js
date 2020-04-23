import { memo } from 'react';

import useFont from '../utils/useFont';

import useStyle from '../../../hooks/theme/useStyle';

import {
  fontSize14,
  fontSize15,
  fontSize18,
  fontSize28,
  fontWeight600
} from '@storeen/system';

const H1 = ({ children, className, styles, color }) => (
  <h1 className={className}>
    {children}

    <style jsx>
      {`
         {
          font-size: ${fontSize28};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
    {styles}
  </h1>
);

const H2 = ({ children, className, styles, color }) => (
  <h2 className={className}>
    {children}

    <style jsx>
      {`
         {
          font-size: ${fontSize18};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
    {styles}
  </h2>
);

const H3 = ({ children, className, styles, color }) => (
  <h3 className={className}>
    {children}

    <style jsx>
      {`
         {
          font-size: ${fontSize15};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
    {styles}
  </h3>
);

const H4 = ({ children, className, styles, color }) => (
  <h4 className={className}>
    {children}

    <style jsx>
      {`
         {
          font-size: ${fontSize14};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
    {styles}
  </h4>
);

export const Heading = useStyle(
  memo(({ children, className, styles, is = 'h1', color = 'inherit' }) => {
    const fontColor = useFont(color);

    return (
      <>
        {is === 'h1' && (
          <H1 className={className} styles={styles} color={fontColor}>
            {children}
          </H1>
        )}
        {is === 'h2' && (
          <H2 className={className} styles={styles} color={fontColor}>
            {children}
          </H2>
        )}
        {is === 'h3' && (
          <H3 className={className} styles={styles} color={fontColor}>
            {children}
          </H3>
        )}
        {is === 'h4' && (
          <H4 className={className} styles={styles} color={fontColor}>
            {children}
          </H4>
        )}
      </>
    );
  })
);
