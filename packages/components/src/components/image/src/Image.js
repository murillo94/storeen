export const Image = ({
  src = null,
  alt = null,
  width = 0,
  height = 0,
  customStyle = {}
}) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={{ ...customStyle }}
  />
);
