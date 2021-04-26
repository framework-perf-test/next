import React from "react";
import Head from "next/head";
import Todos from "../components/todos";

interface Props {}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <div>
        <Head>
          <title>Lighthouse Test | Next Staic Home</title>
          <meta
            name="description"
            content="Lighthouse Test | Next Staic Home"
          />
        </Head>
        <h2>Home</h2>
        <Todos />
      </div>
    );
  }
}
