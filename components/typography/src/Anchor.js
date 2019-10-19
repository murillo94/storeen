import Link from 'next/link';

import useFont from 'hooks/themes/useFont';
import { primary } from 'utils/themes/shadows';
import { primary700 } from 'utils/themes/colors';

const Anchor = ({
  href = null,
  text = '',
  color = 'inherit',
  hover = true
}) => {
  const fontColor = useFont(color);

  return (
    <>
      <Link href={href}>
        <a>{text}</a>
      </Link>

      <style jsx>
        {`
          a {
            font-size: 14px;
            color: ${fontColor};
            text-decoration: none;
            outline: 0;
          }

          :hover {
            text-decoration: ${hover && 'underline'};
          }

          :focus {
            box-shadow: ${primary};
            border-color: ${primary700};
          }
        `}
      </style>
    </>
  );
};

export default Anchor;
