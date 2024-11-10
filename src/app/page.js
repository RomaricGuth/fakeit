import Image from "next/image";
import logo from "/public/assets/logo.png";
import Hero from "@/components/Hero";
import ConfettiContainer from "@/components/ConfettiContainer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero /> 

      <section className="flex gap-image justify-center">
        <div className="flex flex-col">
          <h2>1. Create a fake landing page</h2>
          <p>Showcase your product, we add a fake checkout</p>
          <Image src={logo} />
        </div>

        <div className="flex flex-col">
          <h2>2. Get market analysis</h2>
          <p>We give you your business potential based on the market observations</p>
          <Image src={logo} />
        </div>

        <div className="flex flex-col">
          <h2>3. Start building your community</h2>
          <p>Connect with your potential custommers and build with them</p>
          <Image src={logo} />
        </div>
      </section>

      <section className="flex gap-image">
        <div>
          <h2>Only the market knows</h2>
          <p className="mb-title">You can&apos;t know what will be the next billion dollar worth business. Let&apos;s just listen to the market.</p>
          <ul className="mb-paragraph">
            <li>lead generation analysis</li>
            <li>conversion rate analysis</li>
            <li>SEO insights</li>
          </ul>
          <Button>Buy dropit</Button>
        </div>
        <div className="flex flex-col gap-32">
          <Image src={logo} />
        </div>
      </section>

      <section className="flex flex-row-reverse gap-image">
        <div>
          <h2>Simple editor to create your landing page</h2>
          <p className="mb-title">Add texts, images and more to describe your service. We take care of the following :</p>
          <ul className="mb-paragraph">
            <li>fake checkout</li>
            <li>analytics</li>
            <li>SEO optimization</li>
            <li>deployement</li>
            <li>custom domain or provided domain</li>
          </ul>
          <Button>Try it out</Button>
        </div>
        <div className="flex flex-col gap-32">
          <Image src={logo} />
        </div>
      </section>


      <section className="flex gap-image">
        <div>
          <h2>Gather emails and feedback</h2>
          <p className="mb-title">Offer a chance to take part in your adventure.</p>
          <ul className="mb-paragraph">
            <li>email</li>
            <li>connection with newsletter services</li>
          </ul>
          <Button>Buy dropit</Button>
        </div>
        <div className="flex flex-col gap-32">
          <Image src={logo} />
        </div>
      </section>
    </div>
  );
}
