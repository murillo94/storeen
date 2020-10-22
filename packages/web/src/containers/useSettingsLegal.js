import useForm from '@web/hooks/form/useForm';

const models = {
  refund: 'Política de reembolso',
  privacy: 'Política de privacidade',
  service: 'Termos de serviço',
  shipping: 'Política de envio'
};

const customActions = setState => ({
  onClickCopyModel: model => {
    setState(prevState => ({
      ...prevState,
      [model]: { ...prevState[model], description: models[model] }
    }));
  }
});

const useSettingsLegal = () =>
  useForm(
    {
      refund: {
        description: ''
      },
      privacy: {
        description: ''
      },
      service: {
        description: ''
      },
      shipping: {
        description: ''
      }
    },
    customActions
  );

export default useSettingsLegal;
