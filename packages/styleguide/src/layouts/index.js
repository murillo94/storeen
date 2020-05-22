import { Heading } from '@storeen/components';

export default frontMatter => {
  return ({ children }) => {
    return (
      <>
        <Heading>{frontMatter.title}</Heading>
        <Heading
          is="h2"
          color="muted"
          marginTop={2}
          marginBottom={8}
          sx={{
            fontWeight: 'normal'
          }}
        >
          {frontMatter.description}
        </Heading>
        {children}
      </>
    );
  };
};
