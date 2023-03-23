import Head from "next/head";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section class="row">
        <div class="column1">
          <h1>Hola!</h1>
          <p>Me llamo Omar Holguín y me dedico a crear web apps minimalistas y
            eficientes que se enfocan en la velocidad y la usabilidad.</p>
        </div>
        <div class="column2">
        <Image
            src="/images/me.png"
            alt="loading"
            width={331}
            height={357}
            style="responsive"
          />
        </div>
      </section>


      <section className="container-2">
        <div className="content">
          <h1>Love Content Creation</h1>
        </div>
      </section>
      <section className="container-2">
        <div className="content">
          
        </div>
      </section>
    </>
  );
}
