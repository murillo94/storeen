import useForm from '@app/hooks/form/useForm';

const infos = {
  mercadoPago: 'mercadoPago',
  wirecard: 'wirecard',
  pagSeguro: 'pagSeguro',
  paypal: 'paypal'
};

const customActions = setState => ({
  onClickInfo: payment => {
    setState(prevState => ({
      ...prevState,
      info: infos[payment]
    }));
  }
});

const useSettingsPayments = () =>
  useForm(
    {
      info: '',
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
    },
    customActions
  );

export default useSettingsPayments;
