import { render, fireEvent } from '@testing-library/react';

import { Menu } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im content';

describe('Menu', () => {
  test('should render', () => {
    const { getByRole } = render(<Menu />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children', () => {
    const { getByText } = render(<Menu>{content}</Menu>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have id', () => {
    const { getByRole } = render(<Menu id="id-test" />);

    expect(getByRole('button')).toHaveAttribute('aria-controls', 'id-test');
  });

  test('should have aria, icon and text', () => {
    const { getByRole } = render(<Menu icon="plus" text="im text" />);

    const button = getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-haspopup', 'menu');
    expect(button).toHaveAttribute('aria-label', 'im text');
    expect(getByRole('img')).toHaveAttribute('aria-label', 'plus');
  });

  test('should have visible', () => {
    const { getByRole } = render(<Menu isVisible />);

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  test('should have border', () => {
    const { getByRole } = render(<Menu hasBorder />);

    expect(getByRole('button')).toHaveStyle(
      `border: 1px solid ${theming.colors.gray300};`
    );
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Menu onClick={onClick} />);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Menu appearance="default" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.blue700};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Menu />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray900};`);
    expect(button).toHaveStyle('background-color: transparent;');
  });

  test('should have negative theme', () => {
    const { getByRole } = render(<Menu appearance="negative" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.red700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(<Menu appearance="positive" />);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.green700};`);
  });
});
