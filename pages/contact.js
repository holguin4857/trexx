import Head from "next/head";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <>
      <Head>
        <title>trexx</title>
        <meta name="description" content="Contact me for cool stuff!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="row1">
        <div className="column1">
          <h1>Contact Me</h1>
          <p>Please be human!</p>
          <div>
            <form onSubmit={handleOnSubmit}>
              <p>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" />
              </p>
              <p>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </p>
              <p>
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
        <div className="column2">
          <Image src="/images/me.png" alt="loading" width={331} height={357} />
        </div>
      </section>

      <section className="row">
        <h1>Love Content Creation</h1>
      </section>

      <div className="row2">
        <div className="col1">
          <h2>Static Websites</h2>
          <p>
            Lighting fast and scalable Next js sites, Static or Full stack
            hosted in AWS Amplify and Vercel{" "}
          </p>
        </div>

        <div className="col2">
          <h2>Web Apps y Ecommerce</h2>
          <p>Desarrollamos Apps and Ecommerce websites en bubble y Ecwid </p>
        </div>
      </div>
      <section className="row">
        <h1>Pedal To The Metal</h1>
      </section>
    </>
  );
}
