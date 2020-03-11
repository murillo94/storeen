import { useState, createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '../index';

import { purple700, gray200, red700, green700 } from '@storeen/system';

describe('Input', () => {
  test('should render', () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('should have type password', () => {
    const onClick = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <Input type="password" placeholder="im placeholder" onClick={onClick} />
    );

    const input = getByPlaceholderText('im placeholder');
    const button = getByRole('button');

    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(button);

    expect(input).toHaveAttribute('type', 'text');
  });

  test('should have inner ref', () => {
    const ref = createRef();
    const { getByRole } = render(<Input innerRef={ref} />);

    ref.current.focus();

    expect(getByRole('textbox')).toHaveFocus();
  });

  test('should have placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="im placeholder" />
    );

    expect(getByPlaceholderText('im placeholder')).toBeInTheDocument();
  });

  test('should have mask', () => {
    const { container } = render(<Input />);

    expect(container).toBeInTheDocument();
  });

  test('should have change', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [value, setValue] = useState('im value');
      return (
        <Input
          labelText="im label"
          id="id-test"
          value={value}
          onChange={({ target }) => {
            setValue(target.value);
            onChange(target.value);
          }}
        />
      );
    };

    const { getByLabelText } = render(<Test />);
    const input = getByLabelText('im label');

    expect(input.value).toBe('im value');
    expect(onChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: 'im value changed' } });

    expect(input.value).toBe('im value changed');
    expect(onChange).toBeCalledWith('im value changed');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { container } = render(<Input icon="plus" onCick={onClick} />);

    expect(container).toBeInTheDocument();
  });

  test('should have default theme', () => {
    const { getByRole } = render(<Input appearance="default" />);

    const input = getByRole('textbox');

    expect(input).toHaveStyle(`border: 1px solid ${purple700};`);
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Input />);

    const input = getByRole('textbox');

    expect(input).toHaveStyle(`border: 1px solid ${gray200};`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(<Input appearance="negative" />);

    const input = getByRole('textbox');

    expect(input).toHaveStyle(`border: 1px solid ${red700};`);
  });

  test('should have positive theme', () => {
    const { getByRole } = render(<Input appearance="positive" />);

    const input = getByRole('textbox');

    expect(input).toHaveStyle(`border: 1px solid ${green700};`);
  });
});
