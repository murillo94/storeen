import { render, fireEvent } from '@testing-library/react';

import { Dialog } from '../index';

const content = 'im content';

describe('Dialog', () => {
  test('should render', () => {
    const { container } = render(<Dialog />);

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  test('should have different role', () => {
    const { getByRole } = render(
      <Dialog role="alertdialog" isVisible ariaLabel="im aria label" />
    );

    expect(getByRole('alertdialog')).toHaveAttribute(
      'aria-label',
      'im aria label'
    );
  });

  test('should have children', () => {
    const { getByRole } = render(<Dialog isVisible>{content}</Dialog>);

    const dialog = getByRole('dialog');

    expect(dialog).toHaveTextContent(content);
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toBeVisible();
  });

  test('should have width', () => {
    const { getByText } = render(
      <Dialog isVisible width="100px">
        {content}
      </Dialog>
    );

    expect(getByText(content)).toHaveStyle('width: 100px;');
  });

  test('should have click', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Dialog isVisible onClose={onClose}>
        {content}
      </Dialog>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.parentNode);

    expect(onClose).toHaveBeenCalled();
  });
});
