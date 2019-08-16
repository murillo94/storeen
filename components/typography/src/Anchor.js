import Link from 'next/link';

import useFont from 'themes/useFont';
import { primary } from 'themes/shadows';
import { primary700 } from 'themes/colors';

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
