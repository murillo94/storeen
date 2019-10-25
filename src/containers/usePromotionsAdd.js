import useForm from 'hooks/form/useForm';

const usePromotionsAdd = () =>
  useForm({
    promotion: {
      title: '',
      type: '',
      value: '',
      active: false
    },
    applicable: 'all',
    minimumRequirements: 'total-value-minimum',
    promotional: {
      code: '',
      uniqueCode: false
    },
    schedule: {}
  });

export default usePromotionsAdd;
