import Page from '@app/layouts/adminSettingsContent/store';

import {
  Stack,
  Container,
  Input,
  Disclosure,
  Checkbox,
  Heading,
  Footer,
  Button
} from '@storeen/components';

import useSettingsStore from '@app/containers/useSettingsStore';

import useLayout from '@app/hooks/layout/useLayout';

const StoreSettings = () => {
  const {
    state: { store, help, company, responsible, address },
    actions: { onChange }
  } = useSettingsStore();

  return (
    <>
      <Stack space="large">
        <Container
          title="Dados da loja"
          subTitle="Algumas informações que são necessárias para o seu público conhecer melhor a sua marca."
        >
          <Stack>
            <Input
              labelText="Nome da loja"
              id="store-name"
              name="store.name"
              value={store.name}
              onChange={onChange}
            />
            <Input
              labelText="Sobre"
              id="store-about"
              name="store.about"
              value={store.about}
              onChange={onChange}
            />
            <Input
              labelText="Endereço da sua loja na internet"
              id="store-url"
              name="store.url"
              value={store.url}
              onChange={onChange}
            />
          </Stack>
        </Container>
        <Container
          title="Atendimento"
          subTitle="Essas informações ficaram disponível no rodapé da loja."
        >
          <Stack>
            <Input
              type="email"
              labelText="E-mail de atendimento"
              id="help-email"
              name="help.email"
              value={help.email}
              onChange={onChange}
            />
            <Input
              type="tel"
              labelText="Telefone de atendimento"
              id="help-phone"
              name="help.phone"
              value={help.phone}
              mask="phone"
              onChange={onChange}
            />
          </Stack>
        </Container>
        <Container
          title={
            company.hasLegalPerson
              ? 'Dados de pessoa jurídica'
              : 'Dados de pessoa física'
          }
        >
          <Stack>
            <Disclosure
              as={
                <Checkbox
                  id="company-has-legal-person"
                  name="company.hasLegalPerson"
                  value="hasLegalPerson"
                  description="Caso você seja uma empresa, aconselhamos que seu cadastro seja feito com dados financeiros de pessoa jurídica, de acordo com leis vigentes, de forma regularizada."
                  isChecked={company.hasLegalPerson}
                  onChange={onChange}
                >
                  Exibir dados de pessoa jurídica?
                </Checkbox>
              }
              hasMarginBottom
            >
              <Stack>
                {company.hasLegalPerson && (
                  <Heading is="h5" marginBottom={4}>
                    Dados da empresa
                  </Heading>
                )}
                <Input
                  labelText="Razão Social"
                  id="company-name"
                  name="company.name"
                  value={company.name}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  labelText="CNPJ"
                  id="company-cnpj"
                  name="company.cnpj"
                  value={company.cnpj}
                  mask="cnpj"
                  onChange={onChange}
                />
                <Input
                  labelText="Inscrição Municipal"
                  id="company-state-tax"
                  name="company.stateTax"
                  value={company.stateTax}
                  onChange={onChange}
                />
                <Input
                  labelText="Inscrição Estadual"
                  id="company-municipal-tax"
                  name="company.municipalTax"
                  value={company.municipalTax}
                  onChange={onChange}
                />
              </Stack>
            </Disclosure>
            {company.hasLegalPerson && (
              <Heading is="h5" marginBottom={4}>
                Dados do responsável
              </Heading>
            )}
            <Input
              labelText="Nome"
              id="responsible-name"
              name="responsible.name"
              value={responsible.name}
              onChange={onChange}
            />
            <Input
              type="text"
              labelText="RG"
              id="responsible-rg"
              name="responsible.rg"
              value={responsible.rg}
              onChange={onChange}
            />
            <Input
              type="text"
              labelText="CPF"
              id="responsible-cpf"
              name="responsible.cpf"
              value={responsible.cpf}
              mask="cpf"
              onChange={onChange}
            />
            <Input
              labelText="Gênero"
              id="responsible-gender"
              name="responsible.gender"
              value={responsible.gender}
              onChange={onChange}
            />
            <Input
              type="text"
              labelText="Data de Nascimento"
              id="responsible-birthdate"
              name="responsible.birthdate"
              value={responsible.birthdate}
              mask="date"
              onChange={onChange}
            />
            <Input
              type="tel"
              labelText="Telefone"
              id="responsible-phone"
              name="responsible.phone"
              value={responsible.phone}
              mask="phone"
              onChange={onChange}
            />
          </Stack>
        </Container>
        <Container
          title="Endereço"
          subTitle="Essas informações ficaram disponível no rodapé da loja."
        >
          <Stack>
            <Input
              type="text"
              labelText="CEP"
              id="address-cep"
              name="address.cep"
              value={address.cep}
              mask="cep"
              onChange={onChange}
            />
            <Input
              labelText="Endereço"
              id="address-street"
              name="address.street"
              value={address.street}
              onChange={onChange}
            />
            <Input
              labelText="Número"
              id="address-number"
              name="address.number"
              value={address.number}
              onChange={onChange}
            />
            <Input
              labelText="Bairro"
              id="address-neighborhood"
              name="address.neighborhood"
              value={address.neighborhood}
              onChange={onChange}
            />
            <Input
              labelText="Complemento"
              id="address-complement"
              name="address.complement"
              value={address.complement}
              onChange={onChange}
            />
            <Input
              labelText="Cidade"
              id="address-city"
              name="address.city"
              value={address.city}
              onChange={onChange}
            />
            <Input
              labelText="Estado"
              id="address-state"
              name="address.state"
              value={address.state}
              onChange={onChange}
            />
          </Stack>
        </Container>
      </Stack>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(StoreSettings);
