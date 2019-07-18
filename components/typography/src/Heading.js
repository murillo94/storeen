const H1 = ({ text, margin }) => (
  <>
    <h1 style={{ margin }}>{text}</h1>

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

const H2 = ({ text, margin }) => (
  <>
    <h2 style={{ margin }}>{text}</h2>

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

const H3 = ({ text, margin }) => (
  <>
    <h3 style={{ margin }}>{text}</h3>

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

const Heading = ({ is = 'h1', text = '', margin }) => (
  <>
    {is === 'h1' && <H1 text={text} margin={margin} />}
    {is === 'h2' && <H2 text={text} margin={margin} />}
    {is === 'h3' && <H3 text={text} margin={margin} />}
  </>
);

export default Heading;
