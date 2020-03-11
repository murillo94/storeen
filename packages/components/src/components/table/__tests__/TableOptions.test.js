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
    const { getByPlaceholderText } = render(
      <TableOptions hasSearch placeholderSearchSuffix="suffix test" />
    );

    expect(getByPlaceholderText('Buscar suffix test')).toHaveAttribute(
      'type',
      'text'
    );
  });
});
