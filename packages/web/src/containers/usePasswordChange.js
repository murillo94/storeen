import useForm from '@storeen/system/src/hooks/form/useForm';

const usePasswordChange = () =>
  useForm({
    token: '',
    newPassword: ''
  });

export default usePasswordChange;
