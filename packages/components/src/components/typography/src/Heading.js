import { memo } from 'react';

import useStyle from '../../../hooks/theme/useStyle';

import { theming } from '../../../theme/theming';

import useFont from '../utils/useFont';

const H1 = ({ children, className, styles, color }) => (
  <h1 className={className}>
    {children}

    <style jsx>
      {`
         {
          font-size: ${theming.fontSizes[3]};
          font-weight: ${theming.fontWeights[2]};
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
          font-size: ${theming.fontSizes[2]};
          font-weight: ${theming.fontWeights[2]};
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
          font-size: ${theming.fontSizes[1]};
          font-weight: ${theming.fontWeights[2]};
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
          font-size: ${theming.fontSizes[0]};
          font-weight: ${theming.fontWeights[2]};
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
