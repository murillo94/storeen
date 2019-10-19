import useFont from 'hooks/themes/useFont';

const H1 = ({ text, color, customStyle }) => (
  <>
    <h1 style={{ ...customStyle }}>{text}</h1>

    <style jsx>
      {`
        h1 {
          font-size: 28px;
          font-weight: 600;
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
          font-size: 18px;
          font-weight: 600;
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
          font-size: 15px;
          font-weight: 600;
          color: ${color};
          margin: 0;
        }
      `}
    </style>
  </>
);

const Heading = ({
  is = 'h1',
  text = '',
  color = 'inherit',
  customStyle = {}
}) => {
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
    </>
  );
};

export default Heading;
