import { createPortal } from 'react-dom';

import usePortal from '../utils/usePortal';

export const Portal = ({ children, id }) => {
  const target = usePortal(id);

  return createPortal(children, target);
};
