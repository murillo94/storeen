import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Radio from '../index';

describe('Radio', () => {
  test('should render', () => {
    const { getByRole } = render(<Radio />);

    expect(getByRole('radio')).toBeInTheDocument();
  });

  test('should have text and description', () => {
    const { getByLabelText, getByText } = render(
      <Radio text="im text" description="im description" />
    );

    const text = getByLabelText('im text');
    const description = getByText('im description');

    expect(text.closest('label')).toHaveStyle('display: inline-flex;');
    expect(description).toHaveStyle('margin: 5px 0 0;');
    expect(description.closest('div')).toHaveClass('with-description');
  });

  test('should have change with checked', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [checked, setChecked] = useState();
      return (
        <>
          <Radio
            id="one"
            name="type"
            value="one"
            text="im text one"
            checked={checked === 'one'}
            onChange={({ target }) => {
              setChecked(target.value);
              onChange(target.value);
            }}
          />
          <Radio
            id="two"
            name="type"
            value="two"
            text="im text two"
            checked={checked === 'two'}
            onChange={({ target }) => {
              setChecked(target.value);
              onChange(target.value);
            }}
          />
        </>
      );
    };

    const { getByLabelText } = render(<Test />);
    const radioOne = getByLabelText('im text one');
    const radioTwo = getByLabelText('im text two');

    expect(radioOne.checked).toBe(false);
    expect(radioTwo.checked).toBe(false);
    expect(onChange).not.toBeCalled();

    fireEvent.click(radioOne);

    expect(radioOne.checked).toBe(true);
    expect(radioTwo.checked).toBe(false);
    expect(onChange).toBeCalledWith('one');

    fireEvent.click(radioTwo);

    expect(radioTwo.checked).toBe(true);
    expect(radioOne.checked).toBe(false);
    expect(onChange).toBeCalledWith('two');
  });
});
