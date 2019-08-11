const Image = ({
  src = null,
  alt = null,
  width = 0,
  height = 0,
  margin = null
}) => (
  <img src={src} alt={alt} width={width} height={height} style={{ margin }} />
);

export default Image;
