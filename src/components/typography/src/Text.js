import { memo } from 'react';

import useFont from 'hooks/theme/useFont';

const Text = memo(({ text = '', color = 'inherit', customStyle = {} }) => {
  const fontColor = useFont(color);

  return (
    <>
      <span style={{ ...customStyle }}>{text}</span>

      <style jsx>
        {`
          span {
            font-size: 14px;
            line-height: 20px;
            color: ${fontColor};
          }
        `}
      </style>
    </>
  );
});

export default Text;
