import { useState, useMemo } from 'react';

const defaultActions = setState => ({
  onChange: ({ target }) => {
    const [parentKey, childKey] = target.name.split('.');

    setState(prevState => ({
      ...prevState,
      [parentKey]: {
        ...prevState[parentKey],
        [childKey]: target.value
      }
    }));
  }
});

const useForm = (initialState = {}, customActions = {}) => {
  const [state, setState] = useState(initialState);

  const actions = useMemo(() => {
    const mergeActions = {
      ...defaultActions(setState),
      ...(!!Object.keys(customActions).length && customActions(setState))
    };

    return mergeActions;
  }, [setState]);

  return { state, actions };
};

export default useForm;
