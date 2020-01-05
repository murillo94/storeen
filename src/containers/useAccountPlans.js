import useForm from 'hooks/form/useForm';

export const TYPE = {
  false: 'monthly',
  true: 'annually'
};

export const PLANS = [
  {
    name: 'Grátis',
    value: 'free',
    products: '2 produtos',
    price: {
      monthly: 'R$0',
      annually: 'R$0'
    }
  },
  {
    name: 'Iniciante',
    value: 'starter',
    products: '5 produtos',
    price: {
      monthly: 'R$15',
      annually: 'R$7.5'
    }
  },
  {
    name: 'Pequeno',
    value: 'small',
    products: '15 produtos',
    price: {
      monthly: 'R$35',
      annually: 'R$17.5'
    }
  },
  {
    name: 'Médio',
    value: 'medium',
    products: '20 produtos',
    price: {
      monthly: 'R$50',
      annually: 'R$25'
    }
  },
  {
    name: 'Grande',
    value: 'platinum',
    products: 'Ilimitado',
    price: {
      monthly: 'R$109',
      annually: 'R$54.5'
    }
  }
];

const customActions = setState => ({
  onClickTypePlan: () => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        price: PLANS.filter(x => x.value === prevState.plan.value)[0].price[
          TYPE[!prevState.isAnnually]
        ]
      },
      isAnnually: !prevState.isAnnually
    }));
  },
  onClickPlanRow: ({ name, value, price }) => {
    setState(prevState => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        name,
        value,
        price: price[TYPE[prevState.isAnnually]]
      }
    }));
  }
});

const useAccountPlans = () =>
  useForm(
    {
      plan: {
        name: PLANS[0].name,
        value: PLANS[0].value,
        price: PLANS[0].price
      },
      billing: {
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        name: ''
      },
      isAnnually: false
    },
    customActions
  );

export default useAccountPlans;
