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
        }

        a:hover {
          text-decoration: ${hover && 'underline'};
        }
      `}
    </style>
  </>
);

export default Anchor;
