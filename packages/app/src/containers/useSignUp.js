import useForm from '@app/hooks/form/useForm';

const useLogin = () =>
  useForm({
    fullName: '',
    storeName: '',
    email: '',
    password: ''
  });

export default useLogin;
