import useForm from 'hooks/form/useForm';

const useLogin = () =>
  useForm({
    email: '',
    password: ''
  });

export default useLogin;
