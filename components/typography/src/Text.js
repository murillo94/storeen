const Text = ({ text = '', color = 'inherit', customStyle = {} }) => (
  <>
    <span style={{ ...customStyle }}>{text}</span>

    <style jsx>
      {`
        span {
          font-size: 14px;
          color: ${color};
        }
      `}
    </style>
  </>
);

export default Text;
