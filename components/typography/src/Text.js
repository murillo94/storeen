const Text = ({ text = '', margin = null, fontWeight = null }) => (
  <>
    <span style={{ margin, fontWeight }}>{text}</span>

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
