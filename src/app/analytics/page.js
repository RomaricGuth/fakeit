import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import Image from "next/image";
import search_engine from "/public/assets/gsc_clicks.png";
import search_engine_requests from "/public/assets/gsc_requests.png";
import users from "/public/assets/ga_users.png";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function Page() {
  return (
    <div className="bg-white py-image">
      <section className="mt-image max-w-full px-8">
        <h2 className="text-2xl">Search engine</h2>
        <div className="flex gap-image">
          <div><Image className="border rounded-lg" src={search_engine} alt="Graph of number of apparitions and clicks in search engines over time" /></div>
          <div><Image className="border rounded-lg" src={search_engine_requests} alt="Table of search engine requests and associated positions" /></div>
        </div>
      </section>

      <section className="mt-image max-w-full px-8">

        <div className="flex gap-image">

          <div className="flex-1">
        <h2 className="text-2xl">Analytics</h2>
        <div className="flex gap-4">
          <div className="-m-3"><Image className="h-[101%]" src={users} alt="Graph of site users over time" /></div>
          <div className="flex flex-col gap-4">
            <Card className="flex items-center justify-center p-4">
                <AnimatedCircularProgressBar value={887} max={1000} gaugePrimaryColor={'green'} number={887} description="daily visitors" />
            </Card>
            <Card className="flex items-center justify-center p-4">
                <AnimatedCircularProgressBar value={1.8} max={10} gaugePrimaryColor={'orange'} number="1.8%" description="conversion rate" />
            </Card>
          </div>
        </div>
        </div>

        <div className="flex flex-col flex-1">
        <h2 className="text-2xl">Insights</h2>
        <div className="p-4 bg-accent text-accent-foreground rounded-lg text-lg border border-accent">
          Your idea is getting traction! Your site is among the top 10% most visited sites. However, your conversion rate is below average. People may expect a different product or service than what you are offering for your targetted keywords.
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}