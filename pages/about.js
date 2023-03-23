import Head from "next/head";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="content">
          <h1>sobre mi</h1>
          <p>
            ¡Hola! Me llamo Omar Holguín y me dedico a crear diseños web
            minimalistas y eficientes que se enfocan en la velocidad y la
            usabilidad. He notado que muchas empresas se preocupan más por el
            estilo que por la funcionalidad, lo que puede resultar en sitios web
            lentos y complicados que frustran a sus usuarios.
          </p>
          <p>
            Me gusta usar Next.js para crear sitios web completos y alojarlos en
            AWS Amplify y Vercel, lo que garantiza un rendimiento rápido y
            confiable. Para la sección de e-commerce, prefiero
            utilizar Ecwid y Shopify para que la experiencia de compra sea simple pero
            eficiente. Me apasiona ayudar a las empresas a alcanzar sus
            objetivos a través de un diseño efectivo y fácil de usar. Si estás
            buscando un diseñador que se enfoque en la eficiencia, la usabilidad
            y la velocidad, ¡conéctate conmigo y hablemos de cómo puedo ayudarte
            a lograr tus objetivos!
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/dall-e.png"
            alt="loading"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="container">
        <div className="content">
          <h1>about me</h1>

          <p>
            My name is Omar Holguin. my focus is on creating minimalistic and
            efficient web designs that prioritise speed and usability. I've
            found that many businesses tend to prioritise style over function,
            which can result in slow and cumbersome websites that frustrate
            users.
          </p>
          <p>
            To ensure that my designs are both efficient and well-documented, I
            take an organised approach to my work. I conduct thorough research
            using multiple sources to fully understand the needs of my clients
            and their customers.
          </p>
          <p>
            To build these designs, I utilise Next.js to build full-stack
            websites that are hosted on AWS Amplify and Vercel, enabling fast
            and reliable performance. And for the ecommerce section I prefer to
            use Ecwid for a simple but efficient shopping experience. I'm
            passionate about helping businesses achieve their goals through
            effective and user-friendly design. If you're looking for a designer
            who prioritises efficiency, usability, and speed, let's connect and
            discuss how I can help you reach your objectives.
          </p>
        </div>
      </section>
    </>
  );
}
