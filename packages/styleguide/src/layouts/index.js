import App from '../pages';

import { Heading } from '@storeen/components';

const descriptionStyle = {
  fontWeight: 'normal',
  margin: '7px 0'
};

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <App>
        <Heading text={frontMatter.title} />
        <Heading
          is="h2"
          text={frontMatter.description}
          color="muted"
          customStyle={descriptionStyle}
        />
        {content}
      </App>
    );
  };
};
