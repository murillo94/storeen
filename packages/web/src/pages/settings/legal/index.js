import Page from '@web/layouts/adminSettingsContent/store';

import { Stack, Container, Input, Footer, Button } from '@storeen/components';

import useSettingsLegal from '@web/containers/useSettingsLegal';

import useLayout from '@web/hooks/layout/useLayout';

const LegalSettings = () => {
  const {
    state: { refund, privacy, service, shipping },
    actions: { onChange, onClickCopyModel }
  } = useSettingsLegal();

  return (
    <>
      <Stack space="xlarge">
        <Container
          title="Política de reembolso"
          subTitle="Uma boa política de devolução ou reembolso pode ajudar a proteger a sua empresa e ganhar a confiança dos clientes."
        >
          <Stack>
            <Input
              labelText="Descrição"
              id="refund-description"
              name="refund.description"
              value={refund.description}
              onChange={onChange}
            />
            <Button
              appearance="minimal"
              onClick={() => onClickCopyModel('refund')}
            >
              Copiar modelo
            </Button>
          </Stack>
        </Container>
        <Container
          title="Política de privacidade"
          subTitle="Garanta ao seu usuário o sigilo dos dados fornecidos."
        >
          <Stack>
            <Input
              labelText="Descrição"
              id="privacy-description"
              name="privacy.description"
              value={privacy.description}
              onChange={onChange}
            />
            <Button
              appearance="minimal"
              onClick={() => onClickCopyModel('privacy')}
            >
              Copiar modelo
            </Button>
          </Stack>
        </Container>
        <Container
          title="Termos de serviço"
          subTitle="Estabeleça o que os usuários podem e não podem fazer ao comprar em seu site."
        >
          <Stack>
            <Input
              labelText="Descrição"
              id="service-description"
              name="service.description"
              value={service.description}
              onChange={onChange}
            />
            <Button
              appearance="minimal"
              onClick={() => onClickCopyModel('service')}
            >
              Copiar modelo
            </Button>
          </Stack>
        </Container>
        <Container
          title="Política de envio"
          subTitle="Informe aos seus clientes como será o envio, controle e prazos para a entrega."
        >
          <Stack>
            <Input
              labelText="Descrição"
              id="shipping-description"
              name="shipping.description"
              value={shipping.description}
              onChange={onChange}
            />
            <Button
              appearance="minimal"
              onClick={() => onClickCopyModel('shipping')}
            >
              Copiar modelo
            </Button>
          </Stack>
        </Container>
      </Stack>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(LegalSettings);
