const Anchor = ({ href = null, text = '', hover = true }) => (
  <>
    <a href={href}>{text}</a>

    <style jsx>
      {`
        a {
          font-size: 14px;
          color: inherit;
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
