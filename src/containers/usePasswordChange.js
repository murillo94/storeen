import useForm from 'hooks/form/useForm';

const usePasswordChange = () =>
  useForm({
    token: '',
    newPassword: ''
  });

export default usePasswordChange;
