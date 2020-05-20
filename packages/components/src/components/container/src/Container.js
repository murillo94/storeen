import { Box } from '../../box';
import { Heading, Paragraph } from '../../typography';

export const Container = ({
  children,
  title = '',
  optionsTitle,
  subTitle = '',
  orientation = '',
  align = '',
  hasBoxShadow = true,
  hasBorder = false,
  ...props
}) => {
  const withBorder = hasBorder
    ? {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray300'
      }
    : {};

  return (
    <>
      <Box
        as="section"
        className={`${orientation} ${align}`}
        padding={4}
        marginBottom={9}
        styleConfig={{
          backgroundColor: 'gray0',
          boxShadow: `${
            hasBoxShadow &&
            '0 0 0 1px rgba(63, 63, 68, 0.04), 0 1px 3px 0 rgba(63, 63, 68, 0.15)'
          }`,
          ...withBorder,
          borderRadius: 3,
          width: '100%',
          overflow: 'hidden',
          '&:last-of-type': {
            marginBottom: 6
          }
        }}
        {...props}
      >
        {title && (
          <Box
            as="header"
            padding={props.padding === 0 ? 4 : props.padding}
            paddingBottom={4}
          >
            <Box
              styleConfig={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Heading is="h2">{title}</Heading>
              {optionsTitle}
            </Box>
            {subTitle && (
              <Paragraph color="muted" marginTop={1} marginBottom={2}>
                {subTitle}
              </Paragraph>
            )}
          </Box>
        )}
        {children}
      </Box>

      <style jsx>
        {`
          .vertical {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .horizontal {
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .right {
            justify-content: flex-end;
          }

          .left {
            justify-content: flex-start;
          }

          .between {
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};
