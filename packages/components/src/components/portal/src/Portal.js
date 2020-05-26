import dynamic from 'next/dynamic';

const PortalSsr = dynamic(
  () => import('./PortalSsr').then(mod => mod.PortalSsr),
  {
    ssr: false
  }
);

export const Portal = props => <PortalSsr {...props} />;
