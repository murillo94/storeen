import useForm from '@app/hooks/form/useForm';

const usePasswordChange = () =>
  useForm({
    token: '',
    newPassword: ''
  });

export default usePasswordChange;
