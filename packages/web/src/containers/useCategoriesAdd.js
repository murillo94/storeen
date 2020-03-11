import useForm from '../hooks/form/useForm';

const useCategoriesAdd = () =>
  useForm({
    categorie: {
      title: '',
      description: ''
    },
    type: 'manual'
  });

export default useCategoriesAdd;
