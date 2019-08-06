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
          width: 100%;
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default TabLink;
