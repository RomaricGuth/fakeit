import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 mt-section">
      <h1 className="text-center max-w-[800px]">
        Validate your business idea<br/>in 2 hours, not 2 years
      </h1>

      <p className="text-center mb-paragraph">
        Create fake landing pages, track traffic, build your community and gather feedback all in one place.
      </p>

      <Button>Get Started</Button>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
