import useForm from '@app/hooks/form/useForm';

const customActions = setState => ({
  onClickAddVariation: () => {
    setState(prevState => ({
      ...prevState,
      variations: {
        ...prevState.variations,
        options: [
          ...prevState.variations.options,
          {
            type: '',
            value: ''
          }
        ]
      }
    }));
  },
  onClickRemoveVariation: id => {
    setState(prevState => ({
      ...prevState,
      variations: {
        ...prevState.variations,
        options: [...prevState.variations.options].filter(
          (_, index) => index !== id
        )
      }
    }));
  }
});

const useProductsAdd = () =>
  useForm(
    {
      product: {
        title: '',
        description: '',
        code: ''
      },
      images: [],
      price: {
        actual: '',
        compare: ''
      },
      shipping: {
        hasShipping: false,
        weight: '',
        height: '',
        width: '',
        length: ''
      },
      stock: {
        hasStock: false,
        quantity: ''
      },
      variations: {
        hasVariations: false,
        options: [
          {
            type: '',
            value: ''
          }
        ]
      }
    },
    customActions
  );

export default useProductsAdd;
