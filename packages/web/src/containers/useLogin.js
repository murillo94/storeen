import useForm from '@web/hooks/form/useForm';

const useLogin = () =>
  useForm({
    email: '',
    password: ''
  });

export default useLogin;
