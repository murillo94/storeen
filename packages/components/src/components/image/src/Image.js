import useStyle from '../../../hooks/theme/useStyle';

export const Image = useStyle(
  ({ className, styles, src = null, alt = null, width = 0, height = 0 }) => (
    <>
      <img
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {styles}
    </>
  )
);
