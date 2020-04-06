import Page from '../../../layouts/adminSettingsContent/store';

import {
  Container,
  Disclosure,
  Paragraph,
  Form,
  Input,
  Switch,
  Footer,
  Button
} from '@storeen/components';

import useSettingsShipping from '../../../containers/useSettingsShipping';

import useLayout from '../../../hooks/layout/useLayout';

const descriptionStyle = {
  margin: '0 0 20px'
};

const ContainerShipping = ({ children, disclosure }) => (
  <>
    <Container padding="15px" margin="0 0 20px" hasBoxShadow={false} hasBorder>
      <div>{children}</div>
      {disclosure}
    </Container>

    <style jsx>
      {`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}
    </style>
  </>
);

const ShippingSettings = () => {
  const {
    state: { local, postOffice },
    actions: { onChange }
  } = useSettingsShipping();

  return (
    <>
      <Container
        title="Opções de frete"
        subTitle="Escolha as maneiras de levar seus produtos até seus clientes."
      >
        <ContainerShipping
          disclosure={
            <Disclosure isOpen={local.active}>
              <Paragraph color="muted" customStyle={descriptionStyle}>
                Insira aqui as instruções que seus clientes devem seguir caso
                queiram retirar o produto pessoalmente.
              </Paragraph>
              <Input
                labelText="Orientação para retirar pessoalmente"
                id="local-orientation"
                name="local.orientation"
                value={local.orientation}
                onChange={onChange}
              />
            </Disclosure>
          }
        >
          Habilitar Retirar Pessoalmente?
          <Switch
            id="local"
            name="local.active"
            checked={local.active}
            onChange={onChange}
          />
        </ContainerShipping>
        <ContainerShipping
          disclosure={
            <Disclosure isOpen={postOffice.active}>
              <Paragraph color="muted" customStyle={descriptionStyle}>
                Exclusivo para lojistas que possuem contrato com os Correios.
              </Paragraph>
              <Form>
                <Input
                  labelText="Código administrativo do contrato"
                  id="post-office-code-admin"
                  name="postOffice.codeAdmin"
                  value={postOffice.codeAdmin}
                  onChange={onChange}
                />
                <Input
                  labelText="Senha do contrato"
                  id="post-office-password"
                  name="postOffice.password"
                  value={postOffice.password}
                  onChange={onChange}
                />
                <Input
                  labelText="Códigos dos serviços contratados"
                  id="post-office-code-services"
                  name="postOffice.codeServices"
                  value={postOffice.codeServices}
                  onChange={onChange}
                />
              </Form>
            </Disclosure>
          }
        >
          Contrato Correios
          <Switch
            id="post-office"
            name="postOffice.active"
            checked={postOffice.active}
            onChange={onChange}
          />
        </ContainerShipping>
      </Container>
      <Footer>
        <Button text="Salvar" />
      </Footer>
    </>
  );
};

export default useLayout(Page)(ShippingSettings);
