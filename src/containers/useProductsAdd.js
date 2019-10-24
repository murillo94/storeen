import useForm from 'hooks/form/useForm';

const useProductsAdd = () =>
  useForm({
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
      weight: '',
      height: '',
      width: '',
      length: ''
    },
    stock: {
      quantity: ''
    },
    variations: {}
  });

export default useProductsAdd;
