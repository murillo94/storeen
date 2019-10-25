import useForm from 'hooks/form/useForm';

const useSettingsStore = () =>
  useForm({
    store: {
      name: '',
      about: '',
      url: ''
    },
    help: {
      email: '',
      phone: ''
    },
    company: {
      name: '',
      cnpj: '',
      stateTax: '',
      municipalTax: ''
    },
    responsible: {
      name: '',
      rg: '',
      cpf: '',
      gender: '',
      birthdate: '',
      phone: ''
    },
    address: {
      street: '',
      number: '',
      neighborhood: '',
      complement: '',
      city: '',
      state: ''
    }
  });

export default useSettingsStore;
