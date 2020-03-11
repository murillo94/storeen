import { createPortal } from 'react-dom';

import usePortal from '../utils/usePortal';

export const Portal = ({ id, children }) => {
  const target = usePortal(id);

  return createPortal(children, target);
};
