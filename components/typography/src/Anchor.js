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
          box-shadow: 0 0 0 3px rgba(96, 120, 255, 0.2);
          border-color: #6078ff;
        }
      `}
    </style>
  </>
);

export default Anchor;
