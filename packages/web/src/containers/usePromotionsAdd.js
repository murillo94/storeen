import useForm from '@storeen/system/src/hooks/form/useForm';

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
      hasPromotional: false,
      code: '',
      uniqueCode: false
    },
    schedule: {
      hasSchedule: false
    }
  });

export default usePromotionsAdd;
