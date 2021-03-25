import useForm from '@app/hooks/form/useForm';

const usePasswordEmail = () =>
  useForm({
    email: ''
  });

export default usePasswordEmail;
