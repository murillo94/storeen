const H1 = ({ text, customStyle }) => (
  <>
    <h1 style={{ ...customStyle }}>{text}</h1>

    <style jsx>
      {`
        h1 {
          font-size: 28px;
          font-weight: 600;
          margin: 0;
        }
      `}
    </style>
  </>
);

const H2 = ({ text, customStyle }) => (
  <>
    <h2 style={{ ...customStyle }}>{text}</h2>

    <style jsx>
      {`
        h2 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
      `}
    </style>
  </>
);

const H3 = ({ text, customStyle }) => (
  <>
    <h3 style={{ ...customStyle }}>{text}</h3>

    <style jsx>
      {`
        h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }
      `}
    </style>
  </>
);

const Heading = ({ is = 'h1', text = '', customStyle = {} }) => (
  <>
    {is === 'h1' && <H1 text={text} customStyle={customStyle} />}
    {is === 'h2' && <H2 text={text} customStyle={customStyle} />}
    {is === 'h3' && <H3 text={text} customStyle={customStyle} />}
  </>
);

export default Heading;
