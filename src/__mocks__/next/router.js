module.exports = {
  withRouter: value => {
    const component = value;

    component.defaultProps = {
      ...component.defaultProps,
      router: { pathname: 'mocked-path' }
    };
    return component;
  }
};
