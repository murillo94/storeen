import { render } from '@testing-library/react';

import { FormGroup } from '../index';

const content = 'im content';

describe('FormGroup', () => {
  test('should render', () => {
    const { container } = render(<FormGroup />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<FormGroup>{content}</FormGroup>);

    const text = getByText(content);

    expect(text).toHaveClass('form-group');
    expect(text).toHaveStyle('flex-direction: row');
    expect(text).toBeInTheDocument();
  });

  test('should have type', () => {
    const { getByText } = render(
      <FormGroup type="column">{content}</FormGroup>
    );

    expect(getByText(content)).toHaveStyle('flex-direction: column');
  });
});
