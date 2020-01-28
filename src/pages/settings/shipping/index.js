import Page from 'layouts/adminSettingsContent/store';

import Container from 'components/container';
import Collapse from 'components/collapse';
import { Paragraph } from 'components/typography';
import { Form } from 'components/form';
import Input from 'components/input';
import Switch from 'components/switch';
import Footer from 'components/footer';
import Button from 'components/button';

import useSettingsShipping from 'containers/useSettingsShipping';

import useLayout from 'hooks/layout/useLayout';

const descriptionStyle = {
  margin: '0 0 20px'
};

const ContainerShipping = ({ children, collapse }) => (
  <Container padding="15px" margin="0 0 20px" hasBoxShadow={false} hasBorder>
    <Container
      orientation="horizontal"
      align="between"
      padding="0"
      margin="0"
      hasBoxShadow={false}
      hasBorder={false}
    >
      {children}
    </Container>
    {collapse}
  </Container>
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
          collapse={
            <Collapse isOpen={local.active}>
              <Paragraph
                text="Insira aqui as instruções que seus clientes devem seguir caso queiram retirar o produto pessoalmente."
                color="muted"
                customStyle={descriptionStyle}
              />
              <Input
                labelText="Orientação para retirar pessoalmente"
                id="local-orientation"
                name="local.orientation"
                value={local.orientation}
                onChange={onChange}
              />
            </Collapse>
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
          collapse={
            <Collapse isOpen={postOffice.active}>
              <Paragraph
                text="Exclusivo para lojistas que possuem contrato com os Correios."
                color="muted"
                customStyle={descriptionStyle}
              />
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
            </Collapse>
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
