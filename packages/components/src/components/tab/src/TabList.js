import useStyle from '../../../hooks/theme/useStyle';

export const TabList = useStyle(
  ({ children, className, styles, ariaLabel = 'Menu lateral' }) => (
    <ul
      className={className}
      role="tablist"
      aria-orientation="vertical"
      aria-label={ariaLabel}
    >
      {children}

      <style jsx>
        {`
           {
            background-color: transparent;
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      {styles}
    </ul>
  )
);
