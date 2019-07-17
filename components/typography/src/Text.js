const Text = ({ text = '', margin }) => (
  <>
    <span style={{ margin }}>{text}</span>

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
