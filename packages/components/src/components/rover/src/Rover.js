import { useState, useEffect, useRef, useMemo } from 'react';

import { createOnKeyDown, hasFocusWithin } from '@storeen/system';

export const useRoverState = () => {
  const [currentId, setCurrentId] = useState(1);

  // know list length to not increment currentId
  // improve logic tabIndex
  const onKeyDown = useMemo(
    () =>
      createOnKeyDown({
        ArrowUp: () => setCurrentId(currentId + 1),
        ArrowRight: () => setCurrentId(currentId + 1),
        ArrowDown: () => setCurrentId(currentId - 1),
        ArrowLeft: () => setCurrentId(currentId - 1)
      }),
    [currentId]
  );

  return {
    currentId,
    onKeyDown
  };
};

export const Rover = ({ children, id, currentId, onKeyDown }) => {
  const ref = useRef(null);

  const isFocused = currentId === id;
  const noFocused = currentId !== id;
  const isFirst = currentId === 1 && id === 1;
  const shouldTabIndex = isFocused || (isFirst && noFocused);

  useEffect(() => {
    const rover = ref.current;

    if (isFocused && !hasFocusWithin(rover)) {
      rover.focus();
    }
  }, [isFocused]);

  return (
    <button ref={ref} tabIndex={shouldTabIndex ? 0 : -1} onKeyDown={onKeyDown}>
      {children}

      <style jsx>
        {`
          button :focus {
            background-color: lightblue !important;
          }
        `}
      </style>
    </button>
  );
};
