import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  children: any;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
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
      {children}
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
};

export default Layout;
