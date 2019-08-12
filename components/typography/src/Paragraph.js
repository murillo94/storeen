const Paragraph = ({ text = '', customStyle = {} }) => (
  <>
    <p style={{ ...customStyle }}>{text}</p>

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
