import Router from 'next/router';

import Page from '@web/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Container,
  Input,
  Radio,
  Disclosure,
  Heading,
  Inline,
  Text,
  Select,
  Footer,
  Button
} from '@storeen/components';

import useCategoriesAdd from '@web/containers/useCategoriesAdd';

import useLayout from '@web/hooks/layout/useLayout';

const ruleValueOptions = [
  {
    value: 'Título do produto',
    key: 'product_title',
    match: [
      'is_equal_to',
      'is_not_equal_to',
      'starts_with',
      'ends_with',
      'contains',
      'does_not_contain'
    ]
  },
  {
    value: 'Tipo do produto',
    key: 'product_type',
    match: [
      'is_equal_to',
      'is_not_equal_to',
      'starts_with',
      'ends_with',
      'contains',
      'does_not_contain'
    ]
  },
  {
    value: 'Fornecedor do produto',
    key: 'product_vendor',
    match: [
      'is_equal_to',
      'is_not_equal_to',
      'starts_with',
      'ends_with',
      'contains',
      'does_not_contain'
    ]
  },
  {
    value: 'Preço do produto',
    key: 'product_price',
    match: ['is_equal_to', 'is_not_equal_to', 'is_grether_then', 'is_less_then']
  },
  {
    value: 'Etiqueta do produto',
    key: 'product_tag',
    match: ['is_equal_to']
  },
  {
    value: 'Comparar no preço',
    key: 'compare_at_price',
    match: ['is_equal_to', 'is_not_equal_to', 'is_grether_then', 'is_less_then']
  },
  {
    value: 'Peso',
    key: 'weight',
    match: ['is_equal_to', 'is_not_equal_to', 'is_grether_then', 'is_less_then']
  },
  {
    value: 'Quantidade em estoque',
    key: 'stock_quantity',
    match: ['is_equal_to', 'is_grether_then', 'is_less_then']
  }
];

const ruleMatchOptions = [
  {
    value: 'é igual a',
    key: 'is_equal_to'
  },
  {
    value: 'não é igual a',
    key: 'is_not_equal_to'
  },
  {
    value: 'é maior que',
    key: 'is_grether_then'
  },
  {
    value: 'é menor que',
    key: 'is_less_then'
  },
  {
    value: 'começa com',
    key: 'starts_with'
  },
  {
    value: 'termina com',
    key: 'ends_with'
  },
  {
    value: 'contém',
    key: 'contains'
  },
  {
    value: 'não contém',
    key: 'not_contains'
  },
  {
    value: 'Sim',
    key: 'yes'
  },
  {
    value: 'Não',
    key: 'no'
  }
];

const AddCategorie = () => {
  const {
    state: { categorie, type },
    actions: { onChange, onClickAddCondition, onClickRemoveCondition }
  } = useCategoriesAdd();

  const hasMultipleConditions = type.rules.length > 1;

  const handleBack = () => Router.push('/categories');

  return (
    <>
      <SubHeader
        title="Nova categoria"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Stack space="xlarge">
        <Container title="Geral">
          <Stack>
            <Input
              labelText="Título da categoria"
              id="categorie-title"
              name="categorie.title"
              value={categorie.title}
              onChange={onChange}
            />
            <Input
              labelText="Descrição"
              id="categorie-description"
              name="categorie.description"
              value={categorie.description}
              onChange={onChange}
            />
          </Stack>
        </Container>
        <Container title="Tipo">
          <Stack space="medium">
            <Radio
              id="type-mode-manual"
              name="type.mode"
              value="manual"
              description="Escolha os produtos manualmente para essa coleção."
              isChecked={type.mode === 'manual'}
              onChange={onChange}
            >
              Manual
            </Radio>
            <Disclosure
              as={
                <Radio
                  id="type-mode-automated"
                  name="type.mode"
                  value="automated"
                  description="Crie condições para que produtos existentes ou futuros sejam inseridos nessa coleção."
                  isChecked={type.mode === 'automated'}
                  onChange={onChange}
                >
                  Automatizada
                </Radio>
              }
              isVisible={type.mode === 'automated'}
            >
              <Stack>
                <Heading is="h3">Condições</Heading>
                <Inline isProportional={false}>
                  <Text>Produtos devem ter:</Text>
                  <Radio
                    id="type-condition-all"
                    name="type.condition"
                    value="all"
                    isChecked={type.condition === 'all'}
                    onChange={onChange}
                  >
                    Todas condições
                  </Radio>
                  <Radio
                    id="type-condition-any"
                    name="type.condition"
                    value="any"
                    isChecked={type.condition === 'any'}
                    onChange={onChange}
                  >
                    Qualquer condição
                  </Radio>
                </Inline>
                {type.rules.map((rule, index) => (
                  <Inline key={index}>
                    <Select
                      ariaLabel="Condição"
                      id={`type.rules.${index}.match`}
                      name={`type.rules.${index}.match`}
                      options={ruleValueOptions}
                      value={rule.match}
                      placeholder="Condição"
                      onChange={onChange}
                    />
                    <Select
                      ariaLabel="Operador"
                      id={`type.rules.${index}.operator`}
                      name={`type.rules.${index}.operator`}
                      options={ruleMatchOptions}
                      value={rule.operator}
                      placeholder="Operador"
                      onChange={onChange}
                    />
                    <Input
                      ariaLabel="Valor"
                      id={`type.rules.${index}.value`}
                      name={`type.rules.${index}.value`}
                      value={rule.value}
                      placeholder="Valor"
                      onChange={onChange}
                    />
                    {hasMultipleConditions && (
                      <Button
                        appearance="minimal"
                        icon="trash"
                        onClick={() => onClickRemoveCondition(index)}
                      />
                    )}
                  </Inline>
                ))}
                <Button appearance="minimal" onClick={onClickAddCondition}>
                  Adicionar outra condição
                </Button>
              </Stack>
            </Disclosure>
          </Stack>
        </Container>
      </Stack>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddCategorie);
