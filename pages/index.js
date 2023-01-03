import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Practice tailwindcss by creating a blog."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </>
  );
}
