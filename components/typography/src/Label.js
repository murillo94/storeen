const Label = ({ id = null, htmlFor = null, text = '' }) => (
  <>
    <label id={id} htmlFor={htmlFor}>
      {text}
    </label>

    <style jsx>
      {`
        label {
          font-size: 14px;
          text-align: left;
          margin-bottom: 5px;
          display: block;
        }
      `}
    </style>
  </>
);

export default Label;
