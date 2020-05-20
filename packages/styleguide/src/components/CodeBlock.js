import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';

import { Box, theming } from '@storeen/components';

const theme = {
  plain: {
    color: theming.colors.gray800,
    backgroundColor: theming.colors.gray100
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: theming.colors.gray700,
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: theming.colors.red500
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: theming.colors.gray800
      }
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted'
      ],
      style: {
        color: theming.colors.green700
      }
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: theming.colors.green500
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: theming.colors.red700
      }
    },
    {
      types: ['function-variable'],
      style: {
        color: theming.colors.blue700
      }
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: theming.colors.blue500
      }
    }
  ]
};

export const CodeBlock = ({ children }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => `<>${code}</>`,
    scope: { mdx, ...components }
  };

  return (
    <Box marginTop={4}>
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
        <LivePreview
          style={{
            border: `1px solid ${theming.colors.gray300}`,
            borderTopLeftRadius: theming.radii[2],
            borderTopRightRadius: theming.radii[2],
            padding: theming.space[3]
          }}
        />
        <LiveEditor
          padding={theming.space[3]}
          style={{
            fontSize: theming.fontSizes[1],
            fontWeight: theming.fontWeights[0],
            lineHeight: 1.5,
            border: `1px solid ${theming.colors.gray300}`,
            borderBottomLeftRadius: theming.radii[2],
            borderBottomRightRadius: theming.radii[2],
            borderTop: 'none'
          }}
        />
        <LiveError />
      </LiveProvider>
    </Box>
  );
};
