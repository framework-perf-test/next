import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <header>
            <h1>Next Static Demo</h1>
            <nav>
              <a href="/">Home</a>
            </nav>
          </header>
          <br />
          <br />
          <br />
          <Main />
          <br />
          <br />
          <br />
          <footer>
            Check the lighthouse results at
            <a
              href="https://lighthouse-test.github.io"
              rel="noopener"
              target="_blank"
            >
              https://lighthouse-test.github.io
            </a>
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
