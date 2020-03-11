import useForm from '@storeen/system/src/hooks/form/useForm';

const useCategoriesAdd = () =>
  useForm({
    categorie: {
      title: '',
      description: ''
    },
    type: 'manual'
  });

export default useCategoriesAdd;
