const Footer = ({ children, align = 'right' }) => (
  <>
    <footer className={align}>{children}</footer>

    <style jsx>
      {`
        footer {
          display: flex;
          align-items: center;
        }

        footer :global(button) {
          padding: 10px 20px;
        }

        .right {
          justify-content: flex-end;
        }

        .left {
          justify-content: flex-start;
        }
      `}
    </style>
  </>
);

export default Footer;
