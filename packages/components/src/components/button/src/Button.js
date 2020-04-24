import { Icon } from '../../icon';
import { Text } from '../../typography';

import useTheme from '../../../hooks/theme/useTheme';
import useStyle from '../../../hooks/theme/useStyle';

import { theming } from '../../../theme/theming';

import { fontWeight500, borderRadius6, fontWeight400 } from '@storeen/system';

export const Button = useStyle(
  ({
    children,
    className,
    styles,
    appearance = 'default',
    type = 'button',
    icon = '',
    hasBorder = true,
    isDisabled = false,
    onClick = null,
    ...props
  }) => {
    const theme = useTheme(appearance);

    return (
      <button
        className={className}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-label={children || icon}
        onClick={onClick}
        {...props}
      >
        <>
          {icon && <Icon name={icon} size={17} color={theme.color} />}
          {children && (
            <Text sx={{ margin: icon ? '0 0 0 5px' : 0 }}>{children}</Text>
          )}
        </>

        <style jsx>
          {`
             {
              font-size: ${theming.fontSizes[0]};
              font-weight: ${appearance !== 'minimal'
                ? fontWeight500
                : fontWeight400};
              color: ${theme.color};
              background-color: ${theme.backgroundColor};
              border: ${hasBorder ? `1px solid ${theme.borderColor}` : 'none'};
              border-radius: ${borderRadius6};
              padding: 10px;
              width: auto;
              outline: 0;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
            }

            :hover {
              color: ${theme.hover.color};
              background-color: ${theme.hover.backgroundColor};
              border-color: ${theme.hover.borderColor};
            }

            :focus {
              box-shadow: ${theme.focus.boxShadow};
              border-color: ${theme.focus.borderColor};
            }
          `}
        </style>
        {styles}
      </button>
    );
  }
);
