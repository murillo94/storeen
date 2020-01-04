import useForm from 'hooks/form/useForm';

const customActions = setState => ({
  onClickPlanRow: ({ name, value, price }) => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        name,
        value,
        price
      }
    }));
  }
});

const useAccountPlans = () =>
  useForm(
    {
      plan: {
        name: '',
        value: 'free',
        price: '',
        isAnnually: false
      },
      billing: {
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        name: ''
      }
    },
    customActions
  );

export default useAccountPlans;
