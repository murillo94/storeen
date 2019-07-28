const Image = ({ src = null, alt = null, width = 0, height = 0 }) => (
  <img src={src} alt={alt} width={width} height={height} />
);

export default Image;
