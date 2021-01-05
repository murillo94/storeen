import {
  Heading as StoreenHeading,
  Box,
  Text,
  Paragraph,
  theming
} from '@storeen/components';

const removeUnit = str => str.replace('px', '');

const Heading = props => (
  <StoreenHeading is="h4" marginTop={8} marginBottom={4} {...props} />
);

const SectionTitle = ({ textTransform = 'capitalize', ...props }) => (
  <Text
    marginY={0}
    color="muted"
    sx={{
      textTransform,
      display: 'block'
    }}
    {...props}
  />
);

const Divider = () => (
  <hr
    style={{
      border: 'none',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: theming.colors.gray300,
      margin: '25px 0',
      width: '100%'
    }}
  />
);

const ColorGrid = props => (
  <Box
    marginTop={2}
    sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}
    {...props}
  />
);

const ColorCard = ({ color, name, props }) => (
  <Box marginRight={7} {...props}>
    <Box marginBottom={6}>
      <Box
        sx={{
          backgroundColor: color,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray300',
          borderRadius: 2,
          height: '100px',
          width: '100px'
        }}
      />
      <Box marginTop={1}>
        <StoreenHeading is="h5" marginTop={2} marginBottom={1}>
          <Text sx={{ textTransform: 'capitalize' }}>{name}</Text>
        </StoreenHeading>
        <SectionTitle marginBottom={2} textTransform="uppercase">
          {color.replace(/\(|\)/g, ' ').replace('.', '0.')}
        </SectionTitle>
      </Box>
    </Box>
  </Box>
);

export const ThemeSection = () => (
  <Box marginTop={11}>
    <Heading marginY={4}>Font sizes</Heading>
    <Box sx={{ display: 'flex' }}>
      {Object.entries(theming.fontSizes)
        .reverse()
        .map(([key, value]) => (
          <Box
            key={key}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Paragraph marginBottom={1} marginRight={4}>
              <Text sx={{ fontSize: value }}>Aa</Text>
            </Paragraph>
            <SectionTitle>{removeUnit(value)}</SectionTitle>
          </Box>
        ))}
    </Box>

    <Divider />

    <Heading marginY={4}>Font weights</Heading>
    <Box sx={{ display: 'flex' }}>
      {Object.entries(theming.fontWeights)
        .reverse()
        .map(([key, value]) => (
          <Box
            key={key}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Paragraph marginBottom={1} marginRight={4}>
              <Text sx={{ fontSize: 3, fontWeight: value }}>Aa</Text>
            </Paragraph>
            <SectionTitle>{removeUnit(value)}</SectionTitle>
          </Box>
        ))}
    </Box>

    <Divider />

    <Heading marginY={4}>Space scale</Heading>
    {Object.entries(theming.space).map(([key, value]) => (
      <Text key={key} marginRight={4} sx={{ fontSize: 3 }}>
        {removeUnit(value)}
      </Text>
    ))}

    <Divider />

    <Heading marginY={4}>Radii scale</Heading>
    {Object.entries(theming.radii).map(([key, value]) => (
      <Text key={key} marginRight={4} sx={{ fontSize: 3 }}>
        {typeof value === 'string' ? removeUnit(value) : value}
      </Text>
    ))}

    <Divider />

    <Heading marginY={4}>Colors</Heading>
    <ColorGrid>
      {Object.entries(theming.colors).map(([key, value]) => {
        return (
          !Array.isArray(value) && (
            <ColorCard key={key} color={value} name={key} />
          )
        );
      })}
    </ColorGrid>
  </Box>
);
