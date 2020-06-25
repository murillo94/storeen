const getDocument = element =>
  element ? element.ownerDocument || element : window.document;

const getActiveElement = element => getDocument(element).activeElement;

export const hasFocusWithin = element => {
  const activeElement = getActiveElement(element);

  if (element.contains(activeElement)) return true;
  return false;
};
