import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import Image from "next/image";
import search_engine from "/public/assets/gsc_clicks.png";
import search_engine_requests from "/public/assets/gsc_requests.png";
import users from "/public/assets/ga_users.png";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <section className="mt-image max-w-full px-8">
        <h2 className="text-2xl">Search engine</h2>
        <div className="flex gap-image">
          <div><Image src={search_engine} alt="Graph of number of apparitions and clicks in search engines over time" /></div>
          <div><Image src={search_engine_requests} alt="Table of search engine requests and associated positions" /></div>
        </div>
      </section>

      <section className="mt-image max-w-full px-8">
        <h2 className="text-2xl">Analytics</h2>
        <div className="flex gap-image">
          <div><Image src={users} alt="Graph of site users over time" /></div>
          <Card className="flex items-center justify-center p-4">
              <AnimatedCircularProgressBar value={180} max={1000} gaugePrimaryColor={'green'} number={180} description="daily visitors" />
          </Card>
          <Card className="flex items-center justify-center p-4">
              <AnimatedCircularProgressBar value={7} max={20} gaugePrimaryColor={'orange'} number="20%" description="conversion rate" />
          </Card>
        </div>

        <p>
          Your idea is getting traction! Your site is among the top 10% most visited sites. However, your conversion rate is below average. People may expect a different product or service than what you are offering for your targetted keywords.
        </p>
      </section>
    </div>
  );
}