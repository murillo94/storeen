import { Box } from '../../box';

export const Image = ({
  src = null,
  alt = null,
  width = 0,
  height = 0,
  ...props
}) => (
  <Box as="img" src={src} alt={alt} width={width} height={height} {...props} />
);
