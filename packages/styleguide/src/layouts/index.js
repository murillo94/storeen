import App from '../pages';

import { Heading } from '@storeen/components';

const descriptionStyle = {
  fontWeight: 'normal',
  margin: '7px 0 45px'
};

export default frontMatter => {
  return ({ children }) => {
    return (
      <App>
        <Heading>{frontMatter.title}</Heading>
        <Heading is="h2" color="muted" customStyle={descriptionStyle}>
          {frontMatter.description}
        </Heading>
        {children}
      </App>
    );
  };
};
