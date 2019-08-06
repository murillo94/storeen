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
          padding: 4px 8px;
        }
      `}
    </style>
  </>
);

export default DropdownItemLink;
