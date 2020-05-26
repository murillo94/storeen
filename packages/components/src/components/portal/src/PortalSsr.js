import { createPortal } from 'react-dom';

import usePortal from '../utils/usePortal';

export const PortalSsr = ({ children, id }) => {
  const target = usePortal(id);

  return createPortal(children, target);
};
