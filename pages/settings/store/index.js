import Page from 'layouts/adminSettingsContent/page';

import Container from 'components/container';
import { Input } from 'components/input';

const StoreSettings = () => (
  <Page>
    <Container
      title="Dados da loja"
      subTitle="Algumas informações que são necessárias para o seu público conhecer melhor a sua marca."
    >
      <Input labelText="Nome da loja" id="store-name" name="store-name" />
      <Input labelText="Sobre" id="store-about" name="store-about" />
      <Input
        labelText="Endereço da sua loja na internet"
        id="store-url"
        name="store-url"
      />
    </Container>
    <Container
      title="Atendimento"
      subTitle="Essas informações ficaram disponível no rodapé da loja."
    >
      <Input
        type="email"
        labelText="E-mail de atendimento"
        id="help-email"
        name="help-email"
      />
      <Input
        type="tel"
        labelText="Telefone de atendimento"
        id="help-phone"
        name="help-phone"
      />
    </Container>
    <Container
      title="Dados da empresa"
      subTitle="Caso você seja uma empresa, aconselhamos que seu cadastro seja feito com dados financeiros de pessoa jurídica, de acordo com leis vigentes, de forma regularizada."
    >
      <Input labelText="Razão Social" id="company-name" name="company-name" />
      <Input type="number" labelText="CNPJ" id="cnpj" name="cnpj" />
      <Input
        labelText="Inscrição Municipal"
        id="store-state-tax"
        name="store-state-tax"
      />
      <Input
        labelText="Inscrição Estadual"
        id="company-municipal-tax"
        name="company-municipal-tax"
      />
    </Container>
    <Container
      title="Dados do responsável"
      subTitle="Seus dados pessoais são usados apenas para o cumprimento das leis vigentes."
    >
      <Input labelText="Nome" id="responsible-name" name="responsible-name" />
      <Input type="number" labelText="RG" id="rg" name="rg" />
      <Input type="number" labelText="CPF" id="cpf" name="cpf" />
      <Input
        labelText="Gênero"
        id="responsible-gender"
        name="responsible-gender"
      />
      <Input
        type="date"
        labelText="Data de Nascimento"
        id="responsible-birthdate"
        name="responsible-birthdate"
      />
      <Input
        type="tel"
        labelText="Telefone"
        id="responsible-phone"
        name="responsible-phone"
      />
    </Container>
    <Container
      title="Endereço"
      subTitle="Essas informações ficaram disponível no rodapé da loja."
    >
      <Input type="number" labelText="CEP" id="store-cep" name="store-cep" />
      <Input labelText="Endereço" id="store-address" name="store-address" />
      <Input labelText="Número" id="store-number" name="store-number" />
      <Input
        labelText="Bairro"
        id="store-neighborhood"
        name="store-neighborhood"
      />
      <Input
        labelText="Complemento"
        id="store-complement"
        name="store-complement"
      />
      <Input labelText="Cidade" id="store-city" name="store-city" />
      <Input labelText="Estado" id="store-state" name="store-state" />
    </Container>
  </Page>
);

export default StoreSettings;
