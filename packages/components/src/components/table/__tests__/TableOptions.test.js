import { render } from '@testing-library/react';

import { TableOptions } from '../index';

describe('TableOptions', () => {
  test('should render', () => {
    const { container } = render(<TableOptions />);

    expect(container).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const content = 'im content';
    const { getByText } = render(<TableOptions>{content}</TableOptions>);

    expect(getByText(content)).toBeInTheDocument();
  });

  test('should have input search', () => {
    const { getByLabelText } = render(
      <TableOptions hasSearch placeholderSearchSuffix="suffix test" />
    );

    const input = getByLabelText('Buscar suffix test');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Buscar suffix test');
  });
});
