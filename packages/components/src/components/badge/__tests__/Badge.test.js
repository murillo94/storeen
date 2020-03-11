import { render, fireEvent } from '@testing-library/react';

import { Badge } from '../index';

import {
  primary700,
  mono200,
  negative700,
  positive700
} from '@storeen/system/src/utils/theme/colors';

const content = 'im text';

describe('Badge', () => {
  test('should render', () => {
    const { container } = render(<Badge />);

    expect(container).toBeInTheDocument();
  });

  test('should have text', () => {
    const { getByText, queryByRole } = render(<Badge text={content} />);

    const text = getByText(content);
    const button = queryByRole('button');

    expect(text).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Badge text={content} onClick={onClick} />);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test('should have default theme', () => {
    const { getByText } = render(<Badge text={content} />);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${primary700};`);
    expect(text).toHaveStyle(`border: 1px solid ${primary700};`);
  });

  test('should have minimal theme', () => {
    const { getByText } = render(<Badge appearance="minimal" text={content} />);

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${mono200};`);
    expect(text).toHaveStyle(`border: 1px solid ${mono200};`);
  });

  test('should have negative theme', () => {
    const { getByText } = render(
      <Badge appearance="negative" text={content} />
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${negative700};`);
    expect(text).toHaveStyle(`border: 1px solid ${negative700};`);
  });

  test('should have positive theme', () => {
    const { getByText } = render(
      <Badge appearance="positive" text={content} />
    );

    const text = getByText(content);

    expect(text).toHaveStyle(`color: ${positive700};`);
    expect(text).toHaveStyle(`border: 1px solid ${positive700};`);
  });
});
