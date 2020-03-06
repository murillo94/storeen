import { render } from '@testing-library/react';

import { Anchor } from '../index';

import { mono900, mono800, primary700 } from 'utils/theme/colors';

const props = {
  href: 'https://www.google.com',
  text: 'google'
};

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Anchor />);

    expect(container).toBeInTheDocument();
  });

  test('should have href and text', () => {
    const { getByRole } = render(<Anchor {...props} />);

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveAttribute('aria-label', props.text);
    expect(link).toHaveTextContent(props.text);
  });

  test('should have inherit color', () => {
    const { getByRole } = render(<Anchor {...props} />);

    expect(getByRole('link')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByRole } = render(<Anchor {...props} color="default" />);

    expect(getByRole('link')).toHaveStyle(`color: ${mono900};`);
  });

  test('should have muted color', () => {
    const { getByRole } = render(<Anchor {...props} color="muted" />);

    expect(getByRole('link')).toHaveStyle(`color: ${mono800};`);
  });

  test('should have primary color', () => {
    const { getByRole } = render(<Anchor {...props} color="primary" />);

    expect(getByRole('link')).toHaveStyle(`color: ${primary700};`);
  });
});
