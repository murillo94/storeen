const Text = ({ text = '', margin, fontWeight }) => (
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
