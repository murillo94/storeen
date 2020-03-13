import { memo } from 'react';

import useFont from '../utils/useFont';

import {
  fontSize14,
  fontSize15,
  fontSize18,
  fontSize28,
  fontWeight600
} from '@storeen/system';

const H1 = ({ text, color, customStyle }) => (
  <>
    <h1 style={{ ...customStyle }}>{text}</h1>

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

const H2 = ({ text, color, customStyle }) => (
  <>
    <h2 style={{ ...customStyle }}>{text}</h2>

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

const H3 = ({ text, color, customStyle }) => (
  <>
    <h3 style={{ ...customStyle }}>{text}</h3>

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

const H4 = ({ text, color, customStyle }) => (
  <>
    <h4 style={{ ...customStyle }}>{text}</h4>

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
  ({ is = 'h1', text = '', color = 'inherit', customStyle = {} }) => {
    const fontColor = useFont(color);

    return (
      <>
        {is === 'h1' && (
          <H1 text={text} color={fontColor} customStyle={customStyle} />
        )}
        {is === 'h2' && (
          <H2 text={text} color={fontColor} customStyle={customStyle} />
        )}
        {is === 'h3' && (
          <H3 text={text} color={fontColor} customStyle={customStyle} />
        )}
        {is === 'h4' && (
          <H4 text={text} color={fontColor} customStyle={customStyle} />
        )}
      </>
    );
  }
);
