const Label = ({ id = null, htmlFor = null, text = '', color = 'inherit' }) => (
  <>
    <label id={id} htmlFor={htmlFor}>
      {text}
    </label>

    <style jsx>
      {`
        label {
          font-size: 14px;
          color: ${color};
          text-align: left;
          margin-bottom: 5px;
          display: block;
        }
      `}
    </style>
  </>
);

export default Label;
