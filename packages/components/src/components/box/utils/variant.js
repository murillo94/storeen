import { variant } from '@storeen/system';

export const getVariant = props => {
  if (props.styleConfig && props.styleConfig.variants) {
    const key = Object.keys(props.styleConfig.variants)[0];

    return variant({
      [key]: props.styleConfig.variants[key]
    })(props);
  }

  return null;
};
