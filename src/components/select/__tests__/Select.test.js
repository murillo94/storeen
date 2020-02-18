import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Select from '../index';

import {
  primary700,
  mono200,
  negative700,
  positive700
} from 'utils/theme/colors';

const content = 'im content';
const options = [
  {
    value: 'one'
  },
  {
    value: 'two'
  },
  {
    value: 'three'
  }
];

describe('Select', () => {
  test('should render', () => {
    const { getByRole } = render(<Select />);

    expect(getByRole('combobox')).toBeInTheDocument();
  });

  test('should have change with only select', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [option, setOption] = useState(options[0].value);
      return (
        <Select
          value={option}
          options={options}
          onChange={({ target }) => {
            setOption(target.value);
            onChange(target.value);
          }}
        />
      );
    };

    const { getByRole } = render(<Test />);

    const select = getByRole('combobox');

    expect(select.value).toBe(options[0].value);
    expect(onChange).not.toBeCalled();

    fireEvent.change(select, { target: { value: options[1].value } });

    expect(select.value).toBe(options[1].value);
    expect(onChange).toBeCalledWith(options[1].value);
  });

  test('should have change with label select', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [option, setOption] = useState(options[0].value);
      return (
        <Select
          id="id-test"
          name="name-test"
          value={option}
          labelText={content}
          options={options}
          onChange={({ target }) => {
            setOption(target.value);
            onChange(target.value);
          }}
        />
      );
    };

    const { getByLabelText } = render(<Test />);

    const label = getByLabelText(content);

    expect(label.value).toBe(options[0].value);
    expect(onChange).not.toBeCalled();

    fireEvent.change(label, { target: { value: options[1].value } });

    expect(label.value).toBe(options[1].value);
    expect(onChange).toBeCalledWith(options[1].value);
  });

  test('should have default theme', () => {
    const { getByRole } = render(
      <Select appearance="default">{content}</Select>
    );

    expect(getByRole('combobox')).toHaveStyle(
      `border: 1px solid ${primary700}`
    );
  });

  test('should have default as minimal theme', () => {
    const { getByRole } = render(<Select>{content}</Select>);

    expect(getByRole('combobox')).toHaveStyle(`border: 1px solid ${mono200}`);
  });

  test('should have negative theme', () => {
    const { getByRole } = render(
      <Select appearance="negative">{content}</Select>
    );

    expect(getByRole('combobox')).toHaveStyle(
      `border: 1px solid ${negative700}`
    );
  });

  test('should have positive theme', () => {
    const { getByRole } = render(
      <Select appearance="positive">{content}</Select>
    );

    expect(getByRole('combobox')).toHaveStyle(
      `border: 1px solid ${positive700}`
    );
  });
});
