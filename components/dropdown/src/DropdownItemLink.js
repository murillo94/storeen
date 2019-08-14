import Link from 'next/link';

const DropdownItemLink = ({ children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>

    <style jsx>
      {`
        a {
          color: inherit;
          text-decoration: none;
          padding: 5px 8px;
          width: 100%;
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default DropdownItemLink;
