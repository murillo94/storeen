import { render } from '@testing-library/react';

import { MenuGroup } from '../index';

import { purple700, gray200, red700, green700 } from '@storeen/system';

const content = 'im content';

describe('MenuGroup', () => {
  test('should render', () => {
    const { getByRole } = render(<MenuGroup isVisible={false} />);

    expect(getByRole('menu')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<MenuGroup>{content}</MenuGroup>);

    const menu = getByText(content);

    expect(menu).toHaveAttribute('aria-orientation', 'vertical');
    expect(menu).toHaveAttribute('hidden', '');
  });

  test('should have id', () => {
    const { getByText } = render(<MenuGroup id="id-test">{content}</MenuGroup>);

    expect(getByText(content)).toHaveAttribute('id', 'id-test');
  });

  test('should have default theme', () => {
    const { getByRole } = render(
      <MenuGroup appearance="default" isVisible={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${purple700};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<MenuGroup isVisible={false} />);

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${gray200};`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <MenuGroup appearance="negative" isVisible={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${red700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <MenuGroup appearance="positive" isVisible={false} />
    );

    const menu = getByRole('menu');

    expect(menu).toHaveStyle(`border: 1px solid ${green700};`);
  });
});
