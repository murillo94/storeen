import useForm from 'hooks/form/useForm';

const customActions = setState => ({
  onClickPlanRow: value => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        value
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
        price: ''
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
