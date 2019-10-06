import useFont from 'utils/themes/useFont';

const Label = ({
  children,
  id = null,
  htmlFor = null,
  color = 'inherit',
  customStyle = {}
}) => {
  const fontColor = useFont(color);

  return (
    <>
      <label id={id} htmlFor={htmlFor} style={{ ...customStyle }}>
        {children}
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
