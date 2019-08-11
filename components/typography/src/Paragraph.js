const Paragraph = ({ text = '', margin = null }) => (
  <>
    <p style={{ margin }}>{text}</p>

    <style jsx>
      {`
        p {
          font-size: 14px;
          margin: 0 0 10px;
        }
      `}
    </style>
  </>
);

export default Paragraph;
