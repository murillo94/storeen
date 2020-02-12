import { render, fireEvent } from '@testing-library/react';

import Button from '../index';

import {
  primary700,
  mono0,
  mono900,
  mono200,
  negative700,
  negative600,
  positive700,
  positive600
} from 'utils/theme/colors';
import { primary, negative, positive } from 'utils/theme/shadows';

const content = 'im content';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Button />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveStyle(`border: 1px solid ${primary700}`);
    expect(button).toHaveStyle('width: auto');
    expect(button).not.toBeDisabled();
  });

  test('should have type submit', () => {
    const { getByRole } = render(<Button type="submit">{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('should have text and icon', () => {
    const { getByText } = render(<Button text="im button" icon="plus" />);

    const icon = getByText('plus');
    const text = getByText('im button');

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('should not have border', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveStyle('border: none');
  });

  test('should be disabled', () => {
    const { getByRole } = render(<Button disabled>{content}</Button>);

    const button = getByRole('button');

    expect(button).toBeDisabled();
  });

  test('should have custom style', () => {
    const { getByRole } = render(
      <Button customStyle={{ margin: '10px', backgroundColor: 'red' }}>
        {content}
      </Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle('margin: 10px; background-color: red');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>{content}</Button>);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(button).toHaveFocus();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${primary700}`);
    expect(button).toHaveStyle(`border: 1px solid ${primary700}`);

    fireEvent.click(button);

    expect(button).toHaveStyle(`box-shadow: ${primary}`);
    expect(button).toHaveStyle(`border-color: ${primary700}`);
  });

  test('should have minimal theme', () => {
    const { getByRole } = render(
      <Button appearance="minimal">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono900}`);
    expect(button).toHaveStyle('background-color: transparent');
    expect(button).toHaveStyle(`border: 1px solid ${mono200}`);

    fireEvent.click(button);

    expect(button).toHaveStyle(`box-shadow: ${primary}`);
    expect(button).toHaveStyle(`border-color: ${primary700}`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <Button appearance="negative">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${negative700}`);
    expect(button).toHaveStyle(`border: 1px solid ${negative700}`);

    fireEvent.click(button);

    expect(button).toHaveStyle(`box-shadow: ${negative}`);
    expect(button).toHaveStyle(`border-color: ${negative600}`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <Button appearance="positive">{content}</Button>
    );

    const button = getByRole('button');

    expect(button).toHaveStyle(`color: ${mono0}`);
    expect(button).toHaveStyle(`background-color: ${positive700}`);
    expect(button).toHaveStyle(`border: 1px solid ${positive700}`);

    fireEvent.click(button);

    expect(button).toHaveStyle(`box-shadow: ${positive}`);
    expect(button).toHaveStyle(`border-color: ${positive600}`);
  });
});
