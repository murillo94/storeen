/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { fontSize14, purple700, gray0, gray75, gray900 } from '@storeen/system';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('../public/static/images/favicon.png')}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
                    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                  font-size: ${fontSize14};
                  -webkit-font-smoothing: antialiased;
	                -moz-osx-font-smoothing: grayscale;
                  line-height: 1.3;
                  background-color: ${gray75};
                  color: ${gray900};
                  margin: 0;
                }

                *, :after, :before {
                  box-sizing: border-box;
                }

                ::selection {
                  background-color: ${purple700};
                  color: ${gray0};
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
