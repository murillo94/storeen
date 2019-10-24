import { useState, useMemo } from 'react';
import set from 'set-value';

const defaultActions = setState => ({
  onChange: ({ target }) => {
    const { name, value } = target;

    setState(prevState => {
      const newState = set(prevState, name, value);

      return {
        ...newState
      };
    });
  }
});

const useForm = (initialState = {}, customActions = () => ({})) => {
  const [state, setState] = useState(initialState);

  const actions = useMemo(() => {
    const mergeActions = {
      ...defaultActions(setState),
      ...(!!Object.keys(customActions()).length && customActions(setState))
    };

    return mergeActions;
  }, [setState]);

  return { state, actions };
};

export default useForm;
