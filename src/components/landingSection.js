import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import HoverRippleButton from "./hoverRippleButton";
import { CheckoutButton } from "./checkoutButton";

export default function LandingSection({className, title, description, checks, cta, img, alt, align = 'left'}) {
  return (
    <section className={cn(`flex ${align === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-image`, className)}>
      <div className={`flex-[3] flex flex-col ${align === 'right' && ''}`}>
        <h2>{title}</h2>
        <p className="mb-paragraph" style={{
          maxWidth: "100%",
          "@media (min-width: 1024px)": {
            maxWidth: "500px",
          },
        }}>{description}</p>

        <div className={`flex flex-col ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-image`}>
          <div className="lg:hidden mx-auto max-w-[640px] md:order-2 md:w-[50%]"><Image src={img} alt={alt} className="aspect-auto" /></div>
          <div className="flex flex-col md:self-center">
            <ul className="mb-paragraph list-image-check list-inside">
              {checks.map((check, i) => <li key={i}>{check}</li>)}
            </ul>
            {cta && <CheckoutButton className="self-center" variant="outline">{cta}</CheckoutButton>}
          </div>
        </div>
      </div>
      <div className="flex-[4] justify-center items-center hidden lg:flex"><Image src={img} alt={alt} className="w-full max-h-full aspect-auto" /></div>
    </section>
  )
}