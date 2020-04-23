import { Text } from '../../typography';
import { Image } from './Image';

export const ImageDescription = ({ src, alt, description, width, height }) => (
  <>
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text marginLeft={2}>{description}</Text>
    </div>

    <style jsx>
      {`
        div {
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </>
);
