import Image from "next/image";
import logo from "/public/assets/logo.png";
import editor_2 from "/public/assets/editor_2.png";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import WorklowStep from "@/components/workflowStep";
import LandingSection from "@/components/landingSection";
import analytics from "/public/assets/analytics.png";
import community from "/public/assets/community.png";
import Pricing from "@/components/pricing";
import '@/styles/home.css';
import HowItWorks from "@/components/howItWorks";

export const metadata = {
  title: "FakeIT - Test your business ideas",
  description: "Create fake landing pages, track and analyze traffic, collect emails and gather feedback.",
  canonical: `https://www.${process.env.NEXT_PUBLIC_HOSTNAME}`,
};

export default function Home() {
  return (
    <article className="landing">
      <Hero /> 

      <section className="flex flex-col items-center">
        <h2 className="text-center mb-image">How it works</h2>
        <HowItWorks />
      </section>

      <div id="features">
        <LandingSection
          title="Simple editor for your landing page"
          description="Describe your service with text, images, and more. We handle the rest:"
          checks={[
            "Fake checkout to collect emails and feedback",
            "Search engine optimization",
            "Deployment",
            "Custom or free provided domain"
          ]}
          cta="Try it out"
          img={editor_2}
          alt="No code landing page editor with images and text"
        />

        <LandingSection
          align="right"
          title="Collect data and turn it into insights"
          description="You can’t predict the next billion-dollar idea, only the market knows. Use real data to make decisions."
          checks={[
            "Search engines data",
            "Customer behavior analysis",
            "Business potential evaluation",
          ]}
          cta="Analytics dashboard preview"
          img={analytics}
          alt="Analytics dashboard with search results and business potential analysis"
        />

        <LandingSection
          title="Gather emails and feedback"
          description="When people try to buy your product, ask for their email to join your journey and provide valuable feedback."
          checks={[
            "Email collection",
            "Survey forms",
            "Integration with email marketing tools",
          ]}
          cta="Community dashboard preview"
          img={community}
          alt="Email list with action buttons to send survey and newsletter emails"
        />
      </div>

      <section className="flex flex-col items-center" id="pricing">
        <h2 className="text-center mb-12">Pricing</h2>
        <Pricing />
      </section>
    </article>
  );
}
