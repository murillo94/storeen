import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Checkbox from '../index';

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Checkbox />);

    expect(container).toBeInTheDocument();
  });

  test('should have text and description', () => {
    const { getByLabelText, getByText } = render(
      <Checkbox text="im text" description="im description" />
    );

    const text = getByLabelText('im text');
    const description = getByText('im description');

    expect(text).toBeInTheDocument();
    expect(text.closest('label')).toHaveStyle('display: inline-flex;');
    expect(description).toBeInTheDocument();
    expect(description).toHaveStyle('margin: 5px 0 0;');
    expect(description.closest('div')).toHaveClass('with-description');
  });

  test('should have change with checked', () => {
    const onChange = jest.fn();
    const Test = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Checkbox
          checked={checked}
          text="im text"
          onChange={({ target }) => {
            setChecked(target.checked);
            onChange(target.checked);
          }}
        />
      );
    };

    const { getByLabelText } = render(<Test />);
    const checkbox = getByLabelText('im text');

    expect(checkbox.checked).toBe(false);
    expect(onChange).not.toBeCalled();

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(onChange).toBeCalledWith(true);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
    expect(onChange).toBeCalledWith(false);
  });
});
