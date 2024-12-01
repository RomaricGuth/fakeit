import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

export default function LandingSection({className, title, description, checks, cta, img, alt, align = 'left'}) {
  return (
    <section className={cn(`flex ${align === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-image`, className)}>
      <div className={`flex-[3] flex flex-col ${align === 'right' && 'items-end'}`}>
        <h2>{title}</h2>
        <p className="mb-title">{description}</p>
        <ul className="mb-paragraph list-image-check list-inside">
          {checks.map((check, i) => <li key={i}>{check}</li>)}
        </ul>
        {cta && <Button className="self-center">{cta}</Button>}
      </div>
      <div className="flex-[2] flex justify-center items-center"><Image src={img} alt={alt} className="w-full max-h-full aspect-auto" /></div>
    </section>
  )
}