import { render, fireEvent } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Overlay from '../index';

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

  test('should be visible without portal', () => {
    const { getByText } = render(
      <Overlay id="id-test" showChildren>
        {content}
      </Overlay>
    );

    expect(getByText(content).parentNode).not.toHaveAttribute('id', 'id-test');
  });

  test('should have click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Overlay visible onClick={onClick}>
        {content}
      </Overlay>
    );

    const children = getByText(content);

    expect(children).toBeInTheDocument(content);

    fireEvent.click(children.firstElementChild);

    expect(onClick).toHaveBeenCalled();
  });
});
