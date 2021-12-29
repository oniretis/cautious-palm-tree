import Head from "next/head";

import Image from "next/image";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>trying out tailwindcss</title>
        <meta
          name="description"
          content="frontendmentor challenge interactive-comments-section-main"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
