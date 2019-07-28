import Link from 'next/link';

const DropdownItemLink = ({ children, href }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

export default DropdownItemLink;
