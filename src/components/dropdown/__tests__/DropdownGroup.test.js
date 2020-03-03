import { render } from '@testing-library/react';

import { DropdownGroup } from '../index';

import {
  primary700,
  mono200,
  negative700,
  positive700
} from 'utils/theme/colors';

const content = 'im content';

describe('DropdownGroup', () => {
  test('should render', () => {
    const { getByRole } = render(<DropdownGroup hidden={false} />);

    expect(getByRole('menu')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<DropdownGroup>{content}</DropdownGroup>);

    const menu = getByText(content);

    expect(menu).toHaveAttribute('aria-orientation', 'vertical');
    expect(menu).toHaveAttribute('hidden', '');
  });

  test('should have id', () => {
    const { getByText } = render(
      <DropdownGroup id="id-test">{content}</DropdownGroup>
    );

    expect(getByText(content)).toHaveAttribute('id', 'id-test');
  });

  test('should have default theme', () => {
    const { getByRole } = render(
      <DropdownGroup appearance="default" hidden={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${primary700};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<DropdownGroup hidden={false} />);

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${mono200};`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <DropdownGroup appearance="negative" hidden={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${negative700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <DropdownGroup appearance="positive" hidden={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${positive700};`);
  });
});
