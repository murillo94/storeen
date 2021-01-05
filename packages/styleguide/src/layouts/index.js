import { Heading } from '@storeen/components';

const Layout = ({ children, frontMatter }) => (
  <>
    <Heading>{frontMatter.title}</Heading>
    <Heading
      is="h4"
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

export default Layout;
