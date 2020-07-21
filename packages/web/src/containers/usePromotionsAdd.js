import useForm from '../hooks/form/useForm';

const usePromotionsAdd = () =>
  useForm({
    promotion: {
      title: '',
      type: '',
      value: '',
      active: false
    },
    applicable: {
      mode: 'all',
      value: ''
    },
    minimumRequirements: {
      mode: 'none',
      value: ''
    },
    promotional: {
      hasPromotional: false,
      code: '',
      uniqueCode: false
    },
    schedule: {
      hasSchedule: false,
      startDate: '',
      startTime: '',
      hasFinalDate: false,
      finalDate: '',
      finalTime: ''
    }
  });

export default usePromotionsAdd;
