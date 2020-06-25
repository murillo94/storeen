export const createOnKeyDown = keyMap => event => {
  if (!keyMap) return;

  if (event.key in keyMap) {
    const action = keyMap[event.key];

    if (typeof action === 'function') {
      action(event);
      // eslint-disable-next-line no-useless-return
      return;
    }
  }
};
