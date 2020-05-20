import { render } from '@testing-library/react';

import { Anchor } from '../index';

import { theming } from '../../../theme/theming';

const props = {
  href: 'https://www.google.com',
  ariaLabel: 'im aria label'
};

describe('Anchor', () => {
  test('should render', () => {
    const { container } = render(<Anchor />);

    expect(container).toBeInTheDocument();
  });

  test('should have href and text', () => {
    const { getByRole } = render(<Anchor {...props}>im anchor</Anchor>);

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveAttribute('aria-label', props.ariaLabel);
    expect(link).toHaveTextContent('im anchor');
  });

  test('should have inherit color', () => {
    const { getByRole } = render(<Anchor {...props} />);

    expect(getByRole('link')).toHaveStyle('color: inherit;');
  });

  test('should have default color', () => {
    const { getByRole } = render(<Anchor {...props} color="default" />);

    expect(getByRole('link')).toHaveStyle(`color: ${theming.colors.gray900};`);
  });

  test('should have muted color', () => {
    const { getByRole } = render(<Anchor {...props} color="muted" />);

    expect(getByRole('link')).toHaveStyle(`color: ${theming.colors.gray700};`);
  });

  test('should have primary color', () => {
    const { getByRole } = render(<Anchor {...props} color="primary" />);

    expect(getByRole('link')).toHaveStyle(`color: ${theming.colors.blue700};`);
  });
});
