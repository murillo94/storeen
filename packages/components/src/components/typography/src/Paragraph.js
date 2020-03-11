import { memo } from 'react';

import useFont from '@storeen/system/src/hooks/theme/useFont';

const Paragraph = memo(({ text = '', color = 'inherit', customStyle = {} }) => {
  const fontColor = useFont(color);

  return (
    <>
      <p style={{ ...customStyle }}>{text}</p>

      <style jsx>
        {`
          p {
            font-size: 14px;
            line-height: 20px;
            color: ${fontColor};
            margin: 0 0 10px;
          }
        `}
      </style>
    </>
  );
});

export default Paragraph;
