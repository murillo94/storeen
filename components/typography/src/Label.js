import useFont from 'themes/useFont';

const Label = ({ id = null, htmlFor = null, text = '', color = 'inherit' }) => {
  const fontColor = useFont(color);

  return (
    <>
      <label id={id} htmlFor={htmlFor}>
        {text}
      </label>

      <style jsx>
        {`
          label {
            font-size: 14px;
            color: ${fontColor};
            text-align: left;
            margin-bottom: 5px;
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Label;
