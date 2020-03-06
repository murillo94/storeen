import { render, fireEvent } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Dialog from '../index';

const content = 'im content';

describe('Dialog', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  test('should render', () => {
    const { container } = render(<Dialog />);

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  test('should have children', () => {
    const { getByRole } = render(<Dialog visible>{content}</Dialog>);

    const dialog = getByRole('dialog');

    expect(dialog).toHaveTextContent(content);
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveClass('dialog');
    expect(dialog).toBeVisible();
  });

  test('should have width', () => {
    const { getByText } = render(
      <Dialog visible width="100px">
        {content}
      </Dialog>
    );

    expect(getByText(content)).toHaveStyle('width: 100px;');
  });

  test('should have click', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Dialog visible onClose={onClose}>
        {content}
      </Dialog>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.nextElementSibling);

    expect(onClose).toHaveBeenCalled();
  });
});
