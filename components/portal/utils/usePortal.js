import { useRef, useEffect } from 'react';

const createRootElement = id => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  return rootContainer;
};

const addRootElement = rootElem => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  );
};

const usePortal = id => {
  const rootElemRef = useRef(null);
  const existingParent = document.querySelector(`#${id}`);

  useEffect(() => {
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);

    return () => {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  };

  return existingParent === undefined ? null : getRootElem();
};

export default usePortal;
