import useForm from '@storeen/system/src/hooks/form/useForm';

const useSettingsPayments = () =>
  useForm({
    mercadoPago: {
      active: false,
      email: ''
    },
    wirecard: {
      active: false,
      email: ''
    },
    pagSeguro: {
      active: false,
      email: ''
    },
    paypal: {
      active: false,
      email: ''
    }
  });

export default useSettingsPayments;
