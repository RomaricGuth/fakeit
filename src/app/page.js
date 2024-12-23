import Image from "next/image";
import logo from "/public/assets/logo.png";
import editor from "/public/assets/editor.png";
import editor_2 from "/public/assets/editor_2.png";
import email_dialog from "/public/assets/email_dialog.png";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import WorklowStep from "@/components/workflowStep";
import LandingSection from "@/components/landingSection";

export default function Home() {
  return (
    <div>
      <Hero /> 

      <section className="flex flex-col items-center">
        <h2 className="text-center mb-image">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-x-section gap-y-image">
          <WorklowStep
            img={editor}
            alt="No code landing page editor"
            title="1. Build your fake landing page"
            description="Showcase your product, we add a fake checkout."
          />
          <WorklowStep
            header={(
              <div className="flex items-center gap-image">
                <AnimatedCircularProgressBar value={180} max={1000} gaugePrimaryColor={'green'} number={180} description="daily visitors" />
                <AnimatedCircularProgressBar value={7} max={20} gaugePrimaryColor={'orange'} number="20%" description="conversion rate" />
              </div>
            )}
            title="2. Analyze market potential"
            description="Get real data and insights for success."
          />
          <WorklowStep
            img={email_dialog}
            alt="form with email address input"
            title="3. Start building your community"
            description="Engage with potential customers and develop your idea together."
          />
        </div>
      </section>

      <LandingSection
        title="Simple editor for your landing page"
        description="Describe your service with text, images, and more. We handle the rest:"
        checks={[
          "Fake checkout",
          "Analytics",
          "SEO optimization",
          "Deployment",
          "Custom or provided domain"
        ]}
        cta="Try it Out"
        img={editor_2}
        alt="No code landing page editor with image and text"
      />

      <LandingSection
        align="right"
        title="Only the market knows"
        description="You can’t predict the next billion-dollar idea. Let the market guide your path with real insights."
        checks={[
          "Lead generation analysis",
          "Conversion rate analysis",
          "SEO insights"
        ]}
        cta="Get started with dropit"
        img={logo}
        alt="Market insights icon"
      />

      <LandingSection
        title="Gather emails and feedback"
        description="During fake checkout, invite your potential customers to join your journey and provide valuable feedback."
        checks={[
          "Email collection",
          "Survey form integration",
          "Data about your leads",
        ]}
        cta="Buy dropit"
        img={logo}
        alt="Email collection icon"
      />
    </div>
  );
}
