const Label = ({ htmlFor = null, text = '' }) => (
  <>
    <label htmlFor={htmlFor}> {text} </label>

    <style jsx>
      {`
        label {
          font-size: 14px;
          margin-bottom: 5px;
          display: block;
        }
      `}
    </style>
  </>
);

export default Label;
