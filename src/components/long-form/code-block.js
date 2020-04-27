/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

export const CodeBlock = ({ language = 'jsx', code }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ style, tokens, getLineProps, getTokenProps }) => (
      <pre css={tw`my-8 p-4 rounded shadow-lg`} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span css={tw`mr-4 opacity-50`}>{i + 1}</span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
