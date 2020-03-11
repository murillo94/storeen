import useForm from '@storeen/system/src/hooks/form/useForm';

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
      hasVariations: false
    }
  });

export default useProductsAdd;
