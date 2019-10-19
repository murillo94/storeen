import { useState, useMemo } from 'react';

const useAppState = (customActions, initialState = {}) => {
  const [state, setState] = useState(initialState);

  const actions = useMemo(() => customActions(setState), [setState]);

  return { state, actions };
};

export default useAppState;
