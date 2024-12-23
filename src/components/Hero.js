import { CheckoutButton } from "./checkoutButton";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center mt-section">
      <h1 className="text-center max-w-[800px] mb-image">
        Validate your business idea<br/>in 2 hours with market data
      </h1>

      <p className="text-center mb-paragraph">
        Create fake landing pages, track and analyze traffic, build your community and gather feedback all in one place.
      </p>

      <CheckoutButton>Get Started</CheckoutButton>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
