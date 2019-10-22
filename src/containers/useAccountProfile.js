import useForm from 'hooks/containers/useForm';

const useAccountProfile = () =>
  useForm({
    personalData: {
      name: '',
      email: '',
      phone: ''
    },
    password: {
      actualPassword: '',
      newPassword: '',
      newConfirmPassword: ''
    }
  });

export default useAccountProfile;
