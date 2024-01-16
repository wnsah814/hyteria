import PostsView from "./PostView";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HYTERIA</title>
      </Head>
      <PostsView />
    </>
  );
}
