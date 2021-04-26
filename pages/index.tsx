import React from "react";
import Head from "next/head";
import Todos from "../components/todos";
import dynamic from "next/dynamic";

interface Props {}

export default class Index extends React.Component<Props> {
  getTodoComponent() {
    console.log("in todocomp", process.env.MODE);
    if (process.env.MODE === "spa") {
      console.log("nossr");
      const NoSSRTodos = dynamic(() => import("../components/todos"), {
        ssr: false,
      });
      return <NoSSRTodos />;
    } else {
      return <Todos />;
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Lighthouse Test | Next</title>
          <meta
            name="description"
            content="Lighthouse Test | Next"
          />
        </Head>
        <h2>Home</h2>
        {this.getTodoComponent()}
      </div>
    );
  }
}
