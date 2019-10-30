import useForm from 'hooks/form/useForm';

const useAccountProfile = () =>
  useForm({
    personal: {
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
