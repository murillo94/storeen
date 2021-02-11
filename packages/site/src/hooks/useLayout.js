import Page from '@site/layouts/wrapper';

export const useLayout = WrappedComponent => props => (
  <Page>
    <WrappedComponent {...props} />
  </Page>
);
