import { memo } from 'react';

import useFont from '../utils/useFont';

import {
  fontSize14,
  fontSize15,
  fontSize18,
  fontSize28,
  fontWeight600
} from '@storeen/system';

const H1 = ({ children, color, customStyle }) => (
  <>
    <h1 style={{ ...customStyle }}>{children}</h1>

    <style jsx>
      {`
        h1 {
          font-size: ${fontSize28};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
  </>
);

const H2 = ({ children, color, customStyle }) => (
  <>
    <h2 style={{ ...customStyle }}>{children}</h2>

    <style jsx>
      {`
        h2 {
          font-size: ${fontSize18};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
  </>
);

const H3 = ({ children, color, customStyle }) => (
  <>
    <h3 style={{ ...customStyle }}>{children}</h3>

    <style jsx>
      {`
        h3 {
          font-size: ${fontSize15};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
  </>
);

const H4 = ({ children, color, customStyle }) => (
  <>
    <h4 style={{ ...customStyle }}>{children}</h4>

    <style jsx>
      {`
        h4 {
          font-size: ${fontSize14};
          font-weight: ${fontWeight600};
          color: ${color};
          margin: 0;
        }
      `}
    </style>
  </>
);

export const Heading = memo(
  ({ children, is = 'h1', color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        {is === 'h1' && (
          <H1 color={fontColor} customStyle={customStyle}>
            {children}
          </H1>
        )}
        {is === 'h2' && (
          <H2 color={fontColor} customStyle={customStyle}>
            {children}
          </H2>
        )}
        {is === 'h3' && (
          <H3 color={fontColor} customStyle={customStyle}>
            {children}
          </H3>
        )}
        {is === 'h4' && (
          <H4 color={fontColor} customStyle={customStyle}>
            {children}
          </H4>
        )}
      </>
    );
  }
);
