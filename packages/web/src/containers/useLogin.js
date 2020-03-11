import useForm from '@storeen/system/src/hooks/form/useForm';

const useLogin = () =>
  useForm({
    email: '',
    password: ''
  });

export default useLogin;
