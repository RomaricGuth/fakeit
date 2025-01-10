import { CheckoutButton } from "./checkoutButton";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center mt-section">
      <h1 className="text-center max-w-[800px] mb-image">
        Validate your business idea<br/>in 2 hours with market data
      </h1>

      <p className="text-center mb-paragraph text-lg">
        How to know if your idea is good ? By testing it.<br/>Create fake landing page, track and analyze traffic, build your community and gather feedback all in one place.
      </p>

      <CheckoutButton>Get started</CheckoutButton>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
