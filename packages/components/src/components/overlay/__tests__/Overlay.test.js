import { render, fireEvent } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import { Overlay } from '../index';

const content = 'im content';

describe('Overlay', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  test('should render', () => {
    const { container } = render(<Overlay />);

    expect(container).toBeInTheDocument();
  });

  test('should be visible with portal', () => {
    const { getByText } = render(
      <Overlay id="id-test" visible>
        {content}
      </Overlay>
    );

    expect(getByText(content).parentNode).toHaveAttribute('id', 'id-test');
  });

  test('should be visible with portal and prevent sroll', () => {
    const { getByText } = render(
      <Overlay id="id-test" visible removeBodyScroll>
        {content}
      </Overlay>
    );

    expect(getByText(content).parentNode).toHaveAttribute('id', 'id-test');
    expect(getByText(content).parentNode.parentNode).toHaveStyle(
      'overflow: hidden;'
    );
  });

  test('should have click', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Overlay visible onClose={onClose}>
        {content}
      </Overlay>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.firstElementChild);

    expect(onClose).toHaveBeenCalled();
  });
});
