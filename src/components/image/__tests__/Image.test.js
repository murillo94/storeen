import { render } from '@testing-library/react';

import { Image } from '../index';

const content = 'im alt';

describe('Anchor', () => {
  test('should render', () => {
    const { getByRole } = render(<Image />);

    expect(getByRole('img')).toBeInTheDocument();
  });

  test('should have children and default values', () => {
    const { getByRole } = render(<Image />);

    const image = getByRole('img');

    expect(image).toMatchInlineSnapshot(`
      <img
        height="0"
        width="0"
      />
    `);
  });

  test('should have src', () => {
    const { getByAltText } = render(<Image src="src.com.br" alt={content} />);

    expect(getByAltText(content)).toHaveAttribute('src', 'src.com.br');
  });

  test('should have dimensions', () => {
    const { getByAltText } = render(
      <Image alt={content} width={10} height={10} />
    );

    const alt = getByAltText(content);

    expect(alt).toHaveAttribute('width', '10');
    expect(alt).toHaveAttribute('height', '10');
  });

  test('should have custom style', () => {
    const { getByAltText } = render(
      <Image alt={content} customStyle={{ margin: '10px' }} />
    );

    expect(getByAltText(content)).toHaveStyle('margin: 10px');
  });
});
