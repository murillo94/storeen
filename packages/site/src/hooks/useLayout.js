import Page from '@site/layouts/wrapper';

const useLayout = WrappedComponent => props => (
  <Page>
    <WrappedComponent {...props} />
  </Page>
);

export default useLayout;
