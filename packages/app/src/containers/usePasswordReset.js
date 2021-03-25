import useForm from '@app/hooks/form/useForm';

const usePasswordReset = () =>
  useForm({
    token: '',
    password: ''
  });

export default usePasswordReset;
