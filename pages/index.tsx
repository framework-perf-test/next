import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const Page: NextPage<Props> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>Next</title>
      </Head>
      <h1>Hello {title}!!!</h1>
    </div>
  );
};

Page.getInitialProps = async ({}) => {
  const title = "World";

  return { title };
};

export default Page;
