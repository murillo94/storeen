import { render } from '@testing-library/react';

import { Heading } from '../index';

import { mono900, mono700, primary700 } from 'utils/theme/colors';

describe('Heading', () => {
  test('should render', () => {
    const { container } = render(<Heading />);

    expect(container).toBeInTheDocument();
  });

  describe('H1', () => {
    test('should be H1 with text', () => {
      const { getByRole } = render(<Heading text="im h1" />);

      expect(getByRole('heading')).toContainHTML(
        '<h1 class="jsx-674499530">im h1</h1>'
      );
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading />);

      expect(getByRole('heading')).toHaveStyle('color: inherit');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono900}`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono700}`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${primary700}`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading customStyle={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });

  describe('H2', () => {
    test('should be H2 with text', () => {
      const { getByRole } = render(<Heading is="h2" text="im h2" />);

      expect(getByRole('heading')).toContainHTML(
        '<h2 class="jsx-2742373254">im h2</h2>'
      );
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h2" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h2" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono900}`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h2" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono700}`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h2" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${primary700}`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h2" customStyle={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });

  describe('H3', () => {
    test('should be H3 with text', () => {
      const { getByRole } = render(<Heading is="h3" text="im h3" />);

      expect(getByRole('heading')).toContainHTML(
        '<h3 class="jsx-1645660008">im h3</h3>'
      );
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h3" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h3" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono900}`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h3" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono700}`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h3" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${primary700}`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h3" customStyle={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });

  describe('H4', () => {
    test('should be H4 with text', () => {
      const { getByRole } = render(<Heading is="h4" text="im h4" />);

      expect(getByRole('heading')).toContainHTML(
        '<h4 class="jsx-3226038624">im h4</h4>'
      );
    });

    test('should have inherit color', () => {
      const { getByRole } = render(<Heading is="h4" />);

      expect(getByRole('heading')).toHaveStyle('color: inherit');
    });

    test('should have default color', () => {
      const { getByRole } = render(<Heading is="h4" color="default" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono900}`);
    });

    test('should have muted color', () => {
      const { getByRole } = render(<Heading is="h4" color="muted" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${mono700}`);
    });

    test('should have primary color', () => {
      const { getByRole } = render(<Heading is="h4" color="primary" />);

      expect(getByRole('heading')).toHaveStyle(`color: ${primary700}`);
    });

    test('should have custom style', () => {
      const { getByRole } = render(
        <Heading is="h4" customStyle={{ padding: '10px' }} />
      );

      expect(getByRole('heading')).toHaveStyle('padding: 10px');
    });
  });
});
