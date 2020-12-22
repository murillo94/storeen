const useLayout = CustomLayout => WrappedComponent => props => (
  <CustomLayout>
    <WrappedComponent {...props} />
  </CustomLayout>
);

export default useLayout;
