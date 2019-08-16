import useFont from 'themes/useFont';

const Paragraph = ({ text = '', color = 'inherit', customStyle = {} }) => {
  const fontColor = useFont(color);

  return (
    <>
      <p style={{ ...customStyle }}>{text}</p>

      <style jsx>
        {`
          p {
            font-size: 14px;
            color: ${fontColor};
            margin: 0 0 10px;
          }
        `}
      </style>
    </>
  );
};

export default Paragraph;
