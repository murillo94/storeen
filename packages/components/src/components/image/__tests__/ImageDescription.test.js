import { render } from '@testing-library/react';

import { ImageDescription } from '../index';

const content = 'im alt';

describe('ImageDescription', () => {
  test('should render', () => {
    const { getByRole } = render(<ImageDescription />);

    expect(getByRole('img')).toBeInTheDocument();
  });

  test('should have src', () => {
    const { getByAltText } = render(
      <ImageDescription src="src.com.br" alt={content} />
    );

    expect(getByAltText(content)).toHaveAttribute('src', 'src.com.br');
  });

  test('should have dimensions', () => {
    const { getByAltText } = render(
      <ImageDescription alt={content} width={10} height={10} />
    );

    const alt = getByAltText(content);

    expect(alt).toHaveAttribute('width', '10');
    expect(alt).toHaveAttribute('height', '10');
  });

  test('should have description', () => {
    const { getByText } = render(
      <ImageDescription description="description" />
    );

    expect(getByText('description')).toBeInTheDocument();
  });
});
