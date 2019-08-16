import useFont from 'themes/useFont';

const Text = ({ text = '', color = 'inherit', customStyle = {} }) => {
  const fontColor = useFont(color);

  return (
    <>
      <span style={{ ...customStyle }}>{text}</span>

      <style jsx>
        {`
          span {
            font-size: 14px;
            color: ${fontColor};
          }
        `}
      </style>
    </>
  );
};
export default Text;
