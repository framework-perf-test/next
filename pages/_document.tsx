import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Link from "next/link";

function MyDocumentComponent() {
  return (
    <>
      <header>
        <h1>Next Demo</h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </header>
      <br />
      <Main />
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
    </>
  );
}

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
          <MyDocumentComponent />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
