import useAppState from 'utils/containers/useAppState';

const getActions = setState => ({
  handleChange: (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  }
});

const useAccountProfile = () =>
  useAppState(getActions, {
    name: '',
    email: '',
    phone: '',
    actualPassword: '',
    newPassword: '',
    newConfirmPassword: ''
  });

export default useAccountProfile;
