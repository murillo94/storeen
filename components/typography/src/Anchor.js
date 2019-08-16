import { primary } from 'themes/shadows';
import { primary700 } from 'themes/colors';

const Anchor = ({
  href = null,
  text = '',
  color = 'inherit',
  hover = true
}) => (
  <>
    <a href={href}>{text}</a>

    <style jsx>
      {`
        a {
          font-size: 14px;
          color: ${color};
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

export default Anchor;
