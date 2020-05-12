import { Box } from '../../box';
import { Text } from '../../typography';
import { Image } from './Image';

export const ImageDescription = ({
  src,
  alt,
  description,
  width,
  height,
  ...props
}) => (
  <Box
    styleConfig={{
      display: 'flex',
      alignItems: 'center'
    }}
    {...props}
  >
    <Image src={src} alt={alt} width={width} height={height} />
    <Text marginLeft={2}>{description}</Text>
  </Box>
);
