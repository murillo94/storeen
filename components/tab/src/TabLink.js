import Link from 'next/link';

const TabLink = ({ children, href }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

export default TabLink;
