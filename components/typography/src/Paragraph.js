const Paragraph = ({ text = '' }) => (
  <>
    <p>{text}</p>

    <style jsx>
      {`
        p {
          font-size: 14px;
          margin-bottom: 10px;
        }
      `}
    </style>
  </>
);

export default Paragraph;
