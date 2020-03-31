import App from '../pages';

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <App>
        <h1>{frontMatter.title}</h1>
        {content}
      </App>
    );
  };
};
