import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Radio } from '../index';

const content = 'im content';

describe('Radio', () => {
  test('should render', () => {
    const { getByRole } = render(<Radio />);

    expect(getByRole('radio')).toBeInTheDocument();
  });

  test('should have text and description', () => {
    const { getByLabelText, getByText } = render(
      <Radio description="im description">{content}</Radio>
    );

    const text = getByLabelText(content);
    const description = getByText('im description');

    expect(text.closest('label')).toHaveStyle('display: inline-flex;');
    expect(description).toHaveStyle('margin: 5px 0 0;');
    expect(description.closest('div')).toHaveClass('with-description');
  });

  test('should have change with checked', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <>
          <Radio
            id="one"
            name="type"
            value="one"
            isChecked={isChecked === 'one'}
            onChange={({ target }) => {
              setIsChecked(target.value);
              onChange(target.value);
            }}
          >
            im text one
          </Radio>
          <Radio
            id="two"
            name="type"
            value="two"
            isChecked={isChecked === 'two'}
            onChange={({ target }) => {
              setIsChecked(target.value);
              onChange(target.value);
            }}
          >
            im text two
          </Radio>
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

  test('should have custom props', () => {
    const { getByRole } = render(<Radio aria-expanded="true" />);

    expect(getByRole('radio')).toHaveAttribute('aria-expanded', 'true');
  });
});
