import Link from 'next/link';

const TabLink = ({ children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          padding: 8px 6px;
          outline: 0;
          width: 100%;
          display: flex;
          align-items: center;
        }

        :focus {
          box-shadow: 0 0 0 3px rgba(96, 120, 255, 0.2);
          border-color: #6078ff;
        }
      `}
    </style>
  </>
);

export default TabLink;
