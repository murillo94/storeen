import useForm from '../hooks/form/useForm';

const customActions = setState => ({
  onClickAddCondition: () => {
    setState(prevState => ({
      ...prevState,
      type: {
        ...prevState.type,
        rules: [
          ...prevState.type.rules,
          {
            match: '',
            operator: '',
            value: ''
          }
        ]
      }
    }));
  },
  onClickRemoveCondition: id => {
    setState(prevState => ({
      ...prevState,
      type: {
        ...prevState.type,
        rules: [...prevState.type.rules].filter((_, index) => index !== id)
      }
    }));
  }
});

const useCategoriesAdd = () =>
  useForm(
    {
      categorie: {
        title: '',
        description: ''
      },
      type: {
        mode: 'manual',
        condition: 'all',
        rules: [
          {
            match: '',
            operator: '',
            value: ''
          }
        ]
      }
    },
    customActions
  );

export default useCategoriesAdd;
