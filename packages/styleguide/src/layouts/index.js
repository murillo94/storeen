import App from '../pages';

import { Heading } from '@storeen/components';

const descriptionStyle = {
  fontWeight: 'normal'
};

export default frontMatter => {
  return ({ children }) => {
    return (
      <App>
        <Heading>{frontMatter.title}</Heading>
        <Heading
          is="h2"
          color="muted"
          marginTop={2}
          marginBottom={8}
          sx={descriptionStyle}
        >
          {frontMatter.description}
        </Heading>
        {children}
      </App>
    );
  };
};
