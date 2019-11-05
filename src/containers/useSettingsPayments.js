import useForm from 'hooks/form/useForm';

const useSettingsPayments = () =>
  useForm({
    mercadoPago: {
      active: false
    },
    wirecard: {
      active: false
    },
    pagSeguro: {
      active: false
    },
    paypal: {
      active: false
    }
  });

export default useSettingsPayments;
