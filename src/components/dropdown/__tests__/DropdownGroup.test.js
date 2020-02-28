import { render } from '@testing-library/react';

import { DropdownGroup } from '../index';

const content = 'im content';

describe('DropdownGroup', () => {
  test('should render', () => {
    const { getByRole } = render(<DropdownGroup hidden={false} />);

    expect(getByRole('menu')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByText } = render(<DropdownGroup>{content}</DropdownGroup>);

    const ul = getByText(content);

    expect(ul).toHaveAttribute('aria-orientation', 'vertical');
    expect(ul).toHaveAttribute('hidden', '');
  });

  test('should have id', () => {
    const { getByText } = render(
      <DropdownGroup id="id-test">{content}</DropdownGroup>
    );

    expect(getByText(content)).toHaveAttribute('id', 'id-test');
  });
});
