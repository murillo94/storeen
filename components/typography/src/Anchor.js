const Anchor = ({ href = null, text = '', hover = false }) => (
  <>
    <a href={href}>{text}</a>

    <style jsx>
      {`
        a {
          font-size: 14px;
          color: inherit;
          text-decoration: none;
          display: block;
        }

        a:hover {
          text-decoration: ${hover && 'underline'};
        }
      `}
    </style>
  </>
);

export default Anchor;
