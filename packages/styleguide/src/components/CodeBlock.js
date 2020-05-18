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
        color: theming.colors.gray500,
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
        color: 'hsl(330, 75%, 45%)'
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: theming.colors.gray600
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
        color: 'hsl(180, 55%, 35%)'
      }
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)'
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)'
      }
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)'
      }
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: theming.colors.purple500
      }
    }
  ]
};

export const CodeBlock = ({ children }) => {
  const components = useMDXComponents();

  return (
    <Box marginTop={4}>
      <LiveProvider
        code={children.trim()}
        scope={{ mdx, ...components }}
        theme={theme}
      >
        <LivePreview
          style={{
            border: `1px solid ${theming.colors.gray100}`,
            borderTopLeftRadius: theming.radii[2],
            borderTopRightRadius: theming.radii[2],
            padding: theming.space[3]
          }}
        />
        <LiveEditor
          padding={theming.space[3]}
          style={{
            fontSize: theming.fontSizes[1],
            fontWeight: 400,
            lineHeight: 1.5,
            border: `1px solid ${theming.colors.gray100}`,
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
