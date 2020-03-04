import { render, fireEvent } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import SideSheet from '../index';

const content = 'im content';

describe('SideSheet', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  test('should render', () => {
    const { container } = render(<SideSheet />);

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  test('should have children', () => {
    const { getByRole } = render(<SideSheet visible>{content}</SideSheet>);

    const nav = getByRole('navigation');

    expect(nav).toHaveTextContent(content);
    expect(nav).toHaveClass('side-sheet');
    expect(nav).toHaveStyle('transform: translate3d(0, 0, 0);');
  });

  test('should have width', () => {
    const { getByText } = render(
      <SideSheet visible width="100px">
        {content}
      </SideSheet>
    );

    expect(getByText(content)).toHaveStyle('width: 100px;');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <SideSheet visible onClick={onClick}>
        {content}
      </SideSheet>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.nextElementSibling);

    expect(onClick).toHaveBeenCalled();
  });
});
