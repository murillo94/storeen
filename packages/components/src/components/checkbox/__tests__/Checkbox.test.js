import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../index';

const content = 'im content';

describe('Checkbox', () => {
  test('should render', () => {
    const { getByRole } = render(<Checkbox />);

    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  test('should have text and description', () => {
    const { getByLabelText, getByText } = render(
      <Checkbox description="im description">{content}</Checkbox>
    );

    const text = getByLabelText(content);
    const description = getByText('im description');

    expect(text.closest('label')).toHaveStyle('display: inline-flex;');
    expect(description).toBeInTheDocument();
  });

  test('should have change with checked', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <Checkbox
          isChecked={isChecked}
          onChange={({ target }) => {
            setIsChecked(target.checked);
            onChange(target.checked);
          }}
        >
          {content}
        </Checkbox>
      );
    };

    const { getByLabelText } = render(<Test />);
    const checkbox = getByLabelText(content);

    expect(checkbox.checked).toBe(false);
    expect(onChange).not.toBeCalled();

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(onChange).toBeCalledWith(true);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
    expect(onChange).toBeCalledWith(false);
  });

  test('should have initial checked', () => {
    const { getByLabelText } = render(<Checkbox isChecked>{content}</Checkbox>);

    const checkbox = getByLabelText(content);

    expect(checkbox.checked).toBe(true);
    expect(checkbox).toHaveAttribute('checked', '');
  });

  test('should have custom props', () => {
    const { getByRole } = render(<Checkbox aria-expanded="true" />);

    expect(getByRole('checkbox')).toHaveAttribute('aria-expanded', 'true');
  });
});
