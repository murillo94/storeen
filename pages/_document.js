/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { primary700, mono0, mono75, mono900 } from 'utils/themes/colors';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('images/favicon.png')}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
                    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                  font-size: 14px;
                  -webkit-font-smoothing: antialiased;
	                -moz-osx-font-smoothing: grayscale;
                  line-height: 1.3;
                  background-color: ${mono75};
                  color: ${mono900};
                  margin: 0;
                }

                *, :after, :before {
                  box-sizing: border-box;
                }

                ::selection {
                  background-color: ${primary700};
                  color: ${mono0};
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
