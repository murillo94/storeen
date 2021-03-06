import { render, fireEvent } from '@testing-library/react';

import { SideSheet } from '../index';

const content = 'im content';

describe('SideSheet', () => {
  test('should render', () => {
    const { container } = render(<SideSheet />);

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  test('should have children', () => {
    const { getByRole } = render(<SideSheet isVisible>{content}</SideSheet>);

    const nav = getByRole('navigation');

    expect(nav).toHaveTextContent(content);
    expect(nav).toHaveClass('side-sheet');
    expect(nav).toHaveStyle('transform: translate3d(0,0,0);');
  });

  test('should have width', () => {
    const { getByText } = render(
      <SideSheet isVisible width="100px">
        {content}
      </SideSheet>
    );

    expect(getByText(content)).toHaveStyle('max-width: 100px;');
  });

  test('should have click', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <SideSheet isVisible onClose={onClose}>
        {content}
      </SideSheet>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.parentNode);

    expect(onClose).toHaveBeenCalled();
  });
});
