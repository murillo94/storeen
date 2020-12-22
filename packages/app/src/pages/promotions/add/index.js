import Router from 'next/router';

import Page from '@app/layouts/adminContent';

import {
  SubHeader,
  Stack,
  Container,
  Input,
  Select,
  Radio,
  Checkbox,
  Disclosure,
  Footer,
  Inline,
  Button
} from '@storeen/components';

import usePromotionsAdd from '@app/containers/usePromotionsAdd';

import useLayout from '@app/hooks/layout/useLayout';

const promotionTypeOptions = [
  {
    value: 'valor fixo'
  },
  {
    value: 'porcentagem'
  },
  {
    value: 'frete grátis'
  },
  {
    value: 'compre x leve y'
  }
];

const AddPromotion = () => {
  const {
    state: {
      promotion,
      applicable,
      minimumRequirements,
      promotional,
      schedule
    },
    actions: { onChange }
  } = usePromotionsAdd();

  const handleBack = () => Router.back();

  return (
    <>
      <SubHeader
        title="Nova Promoção"
        hasBack
        onClick={handleBack}
        marginBottom={8}
      />
      <Stack space="xlarge">
        <Container title="Geral">
          <Stack>
            <Input
              labelText="Título da promoção"
              id="promotion-title"
              name="promotion.title"
              value={promotion.title}
              onChange={onChange}
            />
            <Select
              labelText="Tipo"
              id="promotion-type"
              name="promotion.type"
              options={promotionTypeOptions}
              value={promotion.type}
              onChange={onChange}
            />
            <Input
              labelText="Valor do desconto"
              id="promotion-value"
              name="promotion.value"
              value={promotion.value}
              mask="money"
              onChange={onChange}
            />
            <Checkbox
              id="promotion-active"
              name="promotion.active"
              value="active"
              isChecked={promotion.active}
              onChange={onChange}
            >
              Ativar promoção?
            </Checkbox>
          </Stack>
        </Container>
        <Container title="Aplicável">
          <Stack space="small">
            <Radio
              id="applicable-mode-all"
              name="applicable.mode"
              value="all"
              isChecked={applicable.mode === 'all'}
              onChange={onChange}
            >
              Todo o pedido
            </Radio>
            <Disclosure
              as={
                <Radio
                  id="applicable-mode-categorie-specific"
                  name="applicable.mode"
                  value="categorie-specific"
                  isChecked={applicable.mode === 'categorie-specific'}
                  onChange={onChange}
                >
                  Categorias específicas
                </Radio>
              }
              isVisible={applicable.mode === 'categorie-specific'}
              hasMarginBottom
            >
              <Input
                ariaLabel="Buscar categorias"
                id="search-categories"
                name="search-categories"
                icon="search"
                placeholder="Buscar categorias"
              />
            </Disclosure>
            <Disclosure
              as={
                <Radio
                  id="applicable-mode-product-specific"
                  name="applicable.mode"
                  value="product-specific"
                  isChecked={applicable.mode === 'product-specific'}
                  onChange={onChange}
                >
                  Produtos específicas
                </Radio>
              }
              isVisible={applicable.mode === 'product-specific'}
            >
              <Input
                ariaLabel="Buscar produtos"
                id="search-products"
                name="search-products"
                icon="search"
                placeholder="Buscar produtos"
              />
            </Disclosure>
          </Stack>
        </Container>
        <Container title="Requisitos mínimos">
          <Stack space="small">
            <Radio
              id="minimum-requirements-mode-none"
              name="minimumRequirements.mode"
              value="none"
              isChecked={minimumRequirements.mode === 'none'}
              onChange={onChange}
            >
              Nenhum
            </Radio>
            <Disclosure
              as={
                <Radio
                  id="minimum-requirements-mode-total-value-minimum"
                  name="minimumRequirements.mode"
                  value="total-value-minimum"
                  isChecked={minimumRequirements.mode === 'total-value-minimum'}
                  onChange={onChange}
                >
                  Valor total do pedido mínimo
                </Radio>
              }
              isVisible={minimumRequirements.mode === 'total-value-minimum'}
              hasMarginBottom
            >
              <Input
                ariaLabel="Preço"
                id="minimum-requirements-value-total-value-minimum"
                name="minimumRequirements.value"
                value={minimumRequirements.value}
                mask="money"
                onChange={onChange}
              />
            </Disclosure>
            <Disclosure
              as={
                <Radio
                  id="minimum-requirements-mode-quantity-itens-minimum"
                  name="minimumRequirements.mode"
                  value="quantity-itens-minimum"
                  isChecked={
                    minimumRequirements.mode === 'quantity-itens-minimum'
                  }
                  onChange={onChange}
                >
                  Quantidade de itens do pedido mínimo
                </Radio>
              }
              isVisible={minimumRequirements.mode === 'quantity-itens-minimum'}
            >
              <Input
                ariaLabel="Quantidade"
                id="minimum-requirements-value-quantity-itens-minimum"
                name="minimumRequirements.value"
                value={minimumRequirements.value}
                mask="number"
                onChange={onChange}
              />
            </Disclosure>
          </Stack>
        </Container>
        <Container title="Código promocional">
          <Disclosure
            as={
              <Checkbox
                id="promotional-has-promotional"
                name="promotional.hasPromotional"
                value="hasPromotional"
                isChecked={promotional.hasPromotional}
                onChange={onChange}
              >
                Habilitar código promocional?
              </Checkbox>
            }
          >
            <Stack>
              <Input
                labelText="Código da promoção"
                id="promotional-code"
                name="promotional.code"
                value={promotional.code}
                onChange={onChange}
              />
              <Checkbox
                id="promotional-unique-code"
                name="promotional.uniqueCode"
                value="uniqueCode"
                isChecked={promotional.uniqueCode}
                onChange={onChange}
              >
                Cupom de uso único por CPF?
              </Checkbox>
            </Stack>
          </Disclosure>
        </Container>
        <Container title="Agendar">
          <Disclosure
            as={
              <Checkbox
                id="schedule-has-schedule"
                name="schedule.hasSchedule"
                value="hasSchedule"
                isChecked={schedule.hasSchedule}
                onChange={onChange}
              >
                Agendar promoção?
              </Checkbox>
            }
          >
            <Stack>
              <Inline>
                <Input
                  labelText="Data inicial"
                  id="schedule-start-date"
                  name="schedule.startDate"
                  value={schedule.startDate}
                  mask="date"
                  onChange={onChange}
                />
                <Input
                  labelText="Horário inicial"
                  id="schedule-start-time"
                  name="schedule.startTime"
                  value={schedule.startTime}
                  mask="time"
                  onChange={onChange}
                />
              </Inline>
              <Disclosure
                as={
                  <Checkbox
                    id="schedule-has-final-date"
                    name="schedule.hasFinalDate"
                    value="hasFinalDate"
                    isChecked={schedule.hasFinalDate}
                    onChange={onChange}
                  >
                    Habilitar data final
                  </Checkbox>
                }
              >
                <Inline>
                  <Input
                    labelText="Data final"
                    id="schedule-final-date"
                    name="schedule.finalDate"
                    value={schedule.finalDate}
                    mask="date"
                    onChange={onChange}
                  />
                  <Input
                    labelText="Horário final"
                    id="schedule-final-time"
                    name="schedule.finalTime"
                    value={schedule.finalTime}
                    mask="time"
                    onChange={onChange}
                  />
                </Inline>
              </Disclosure>
            </Stack>
          </Disclosure>
        </Container>
      </Stack>
      <Footer>
        <Button>Salvar</Button>
      </Footer>
    </>
  );
};

export default useLayout(Page)(AddPromotion);
