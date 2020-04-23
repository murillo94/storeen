import { render } from '@testing-library/react';

import { Heading } from '../index';

import { gray900, gray800, purple700 } from '@storeen/system';

describe('Heading', () => {
  test('should render', () => {
    const { container } = render(<Heading />);

    expect(container).toBeInTheDocument();
  });

  describe('H1', () => {
    test('should be H1 with text', () => {
      const { container } = render(<Heading>im h1</Heading>);

      const h1 = container.querySelector('h1');

      expect(h1).toHaveTextContent('im h1');
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading />);

      expect(getByRole('heading')).toHaveStyle('color: inherit;');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray900};`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray800};`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${purple700};`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading sx={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });

  describe('H2', () => {
    test('should be H2 with text', () => {
      const { container } = render(<Heading is="h2">im h2</Heading>);

      const h2 = container.querySelector('h2');

      expect(h2).toHaveTextContent('im h2');
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h2" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit;');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h2" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray900};`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h2" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray800};`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h2" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${purple700};`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h2" sx={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });

  describe('H3', () => {
    test('should be H3 with text', () => {
      const { container } = render(<Heading is="h3">im h3</Heading>);

      const h3 = container.querySelector('h3');

      expect(h3).toHaveTextContent('im h3');
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h3" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit;');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h3" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray900};`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h3" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray800};`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h3" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${purple700};`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h3" sx={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px;');
    });
  });

  describe('H4', () => {
    test('should be H4 with text', () => {
      const { container } = render(<Heading is="h4">im h4</Heading>);

      const h4 = container.querySelector('h4');

      expect(h4).toHaveTextContent('im h4');
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h4" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit;');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h4" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray900};`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h4" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${gray800};`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h4" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${purple700};`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h4" sx={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });
});
