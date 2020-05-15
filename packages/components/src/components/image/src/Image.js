import { Box } from '../../box';

export const Image = ({
  src = null,
  alt = null,
  width = null,
  height = null,
  ...props
}) => (
  <Box as="img" src={src} alt={alt} width={width} height={height} {...props} />
);
