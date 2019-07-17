const H1 = ({ text }) => (
  <>
    <h1>{text}</h1>

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

const H2 = ({ text }) => (
  <>
    <h2>{text}</h2>

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

const Heading = ({ is = 'h1', text = '' }) => (
  <>
    {is === 'h1' && <H1 text={text} />}
    {is === 'h2' && <H2 text={text} />}
  </>
);

export default Heading;
