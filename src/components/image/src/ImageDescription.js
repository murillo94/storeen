import { Text } from 'components/typography';
import Image from './Image';

const textStyle = {
  marginLeft: '8px'
};

const ImageDescription = ({ src, alt, description, width, height }) => (
  <>
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
      <Text text={description} customStyle={textStyle} />
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

export default ImageDescription;
