import useForm from '@web/hooks/form/useForm';

const usePasswordChange = () =>
  useForm({
    token: '',
    newPassword: ''
  });

export default usePasswordChange;
