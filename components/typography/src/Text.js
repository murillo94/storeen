const Text = ({ text = '', customStyle = {} }) => (
  <>
    <span style={{ ...customStyle }}>{text}</span>

    <style jsx>
      {`
        span {
          font-size: 14px;
        }
      `}
    </style>
  </>
);

export default Text;
