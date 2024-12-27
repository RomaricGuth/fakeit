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
import analytics from "/public/assets/analytics.png";
import community from "/public/assets/community.png";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Hero /> 

      <section className="flex flex-col items-center">
        <h2 className="text-center mb-image">How it works</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <WorklowStep
            img={editor}
            alt="No code landing page editor"
            title="1. Build your fake landing page"
            description="Showcase your product, we add a fake checkout."
          />
          <WorklowStep
            header={(
              <div className="flex items-center gap-image">
                <AnimatedCircularProgressBar value={180} max={1000} gaugePrimaryColor={'orange'} number={180} description="daily visitors" />
                <AnimatedCircularProgressBar value={20} max={35} gaugePrimaryColor={'green'} number="20%" description="conversion rate" />
              </div>
            )}
            title="2. Analyze market potential"
            description="See if people connect to your site try to buy."
          />
          <WorklowStep
            img={email_dialog}
            alt="form with email address input"
            title="3. Start building your community"
            description="Invite your early customers to leave their email and develop your idea together."
          />
        </div>
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
          description="During fake checkout, invite your potential customers to join your journey and provide valuable feedback."
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
    </div>
  );
}
