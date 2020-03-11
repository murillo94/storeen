import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Switch } from '../index';

import {
  mono900,
  mono800,
  primary700
} from '@storeen/system/src/utils/theme/colors';

describe('Switch', () => {
  test('should render', () => {
    const { getByRole } = render(<Switch />);

    expect(getByRole('switch')).toBeInTheDocument();
  });

  test('should have left text', () => {
    const { getByText } = render(<Switch leftText="im left text" />);

    const text = getByText('im left text');

    expect(text).toHaveStyle('margin-right: 7px;');
  });

  test('should have right text', () => {
    const { getByText } = render(<Switch rightText="im right text" />);

    const text = getByText('im right text');

    expect(text).toHaveStyle('margin-left: 7px;');
  });

  test('should have default as muted color text', () => {
    const { getByText } = render(
      <Switch leftText="im left text" rightText="im right text" />
    );

    const leftText = getByText('im left text');
    const rightText = getByText('im right text');

    expect(leftText).toHaveStyle(`color: ${mono800};`);
    expect(rightText).toHaveStyle(`color: ${mono800};`);
  });

  test('should have default color text', () => {
    const { getByText } = render(
      <Switch
        leftText="im left text"
        rightText="im right text"
        colorText="default"
      />
    );

    const leftText = getByText('im left text');
    const rightText = getByText('im right text');

    expect(leftText).toHaveStyle(`color: ${mono900};`);
    expect(rightText).toHaveStyle(`color: ${mono900};`);
  });

  test('should have primary color text', () => {
    const { getByText } = render(
      <Switch
        leftText="im left text"
        rightText="im right text"
        colorText="primary"
      />
    );

    const leftText = getByText('im left text');
    const rightText = getByText('im right text');

    expect(leftText).toHaveStyle(`color: ${primary700};`);
    expect(rightText).toHaveStyle(`color: ${primary700};`);
  });

  test('should have change with checked', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          checked={checked}
          onChange={({ target }) => {
            setChecked(target.checked);
            onChange(target.checked);
          }}
        />
      );
    };

    const { getByRole } = render(<Test />);
    const switchRole = getByRole('switch');

    expect(switchRole.checked).toBe(false);
    expect(onChange).not.toBeCalled();

    fireEvent.click(switchRole);

    expect(switchRole.checked).toBe(true);
    expect(onChange).toBeCalledWith(true);

    fireEvent.click(switchRole);

    expect(switchRole.checked).toBe(false);
    expect(onChange).toBeCalledWith(false);
  });

  test('should have custom props', () => {
    const { getByRole } = render(<Switch aria-expanded="true" />);

    expect(getByRole('switch')).toHaveAttribute('aria-expanded', 'true');
  });
});
