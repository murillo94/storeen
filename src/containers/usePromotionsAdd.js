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
      hasPromotional: true,
      code: '',
      uniqueCode: false
    },
    schedule: {
      hasSchedule: false
    }
  });

export default usePromotionsAdd;
