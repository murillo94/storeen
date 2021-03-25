import useForm from '@app/hooks/form/useForm';

const useLogin = () =>
  useForm({
    email: '',
    password: ''
  });

export default useLogin;
