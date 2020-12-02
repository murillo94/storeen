import { Box } from '../../box';
import { Heading, Paragraph } from '../../typography';

export const Container = ({
  children,
  title = '',
  optionsTitle,
  subTitle = '',
  orientation = '',
  align = '',
  ...props
}) => (
  <>
    <Box
      as="section"
      className={`${orientation} ${align}`}
      padding={4}
      styleConfig={{
        backgroundColor: 'gray0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray300',
        borderRadius: 3,
        width: 'auto',
        overflow: 'hidden'
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
