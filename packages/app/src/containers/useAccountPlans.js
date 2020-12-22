import useForm from '@app/hooks/form/useForm';

import { formatBRL } from '@app/utils/currency';

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
      monthly: formatBRL(0),
      annually: formatBRL(0)
    }
  },
  {
    name: 'Iniciante',
    value: 'starter',
    products: '5 produtos',
    price: {
      monthly: formatBRL(15),
      annually: formatBRL(7.5)
    }
  },
  {
    name: 'Pequeno',
    value: 'small',
    products: '15 produtos',
    price: {
      monthly: formatBRL(35),
      annually: formatBRL(17.5)
    }
  },
  {
    name: 'Médio',
    value: 'medium',
    products: '20 produtos',
    price: {
      monthly: formatBRL(50),
      annually: formatBRL(25)
    }
  },
  {
    name: 'Grande',
    value: 'platinum',
    products: 'Ilimitado',
    price: {
      monthly: formatBRL(109),
      annually: formatBRL(54.5)
    }
  }
];

const customActions = setState => ({
  onClickType: () => {
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
  onClickPlan: ({ name, value, price }) => {
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
