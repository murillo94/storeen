import { render, fireEvent } from '@testing-library/react';

import { Button } from '../index';

import { theming } from '../../../theme/theming';

const content = 'im content';

describe('Button', () => {
  test('should render', () => {
    const { getByRole } = render(<Button />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveStyle(`border: 1px solid ${theming.colors.blue700};`);
    expect(button).toHaveStyle('width: auto;');
    expect(button).not.toBeDisabled();
  });

  test('should have type submit', () => {
    const { getByRole } = render(<Button type="submit">{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('should have aria, icon and text', () => {
    const { getByRole } = render(<Button icon="plus">im button</Button>);

    const button = getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'im button');
    expect(button).toHaveTextContent('im button');
    expect(getByRole('img')).toHaveAttribute('aria-label', 'plus');
  });

  test('should not have border', () => {
    const { getByRole } = render(<Button hasBorder={false}>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveStyle('border: none;');
  });

  test('should be disabled', () => {
    const { getByRole } = render(<Button isDisabled>{content}</Button>);

    const button = getByRole('button');

    expect(button).toBeDisabled();
  });

  test('should have custom style', () => {
    const { getByRole } = render(
      <Button sx={{ margin: '10px', backgroundColor: 'red' }}>{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle('margin: 10px; background-color: red;');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>{content}</Button>);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.blue700};`);
    expect(button).toHaveStyle(`border: 1px solid ${theming.colors.blue700};`);
  });

  test('should have minimal theme', () => {
    const { getByRole } = render(
      <Button appearance="minimal">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray900};`);
    expect(button).toHaveStyle('background-color: transparent;');
    expect(button).toHaveStyle(`border: 1px solid ${theming.colors.gray200};`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <Button appearance="negative">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.red700};`);
    expect(button).toHaveStyle(`border: 1px solid ${theming.colors.red700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <Button appearance="positive">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${theming.colors.gray0};`);
    expect(button).toHaveStyle(`background-color: ${theming.colors.green700};`);
    expect(button).toHaveStyle(`border: 1px solid ${theming.colors.green700};`);
  });

  test('should have custom props', () => {
    const { getByRole } = render(<Button aria-expanded="true" />);

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });
});
