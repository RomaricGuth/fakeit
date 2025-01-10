"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import HoverRippleButton from "./hoverRippleButton";
import { CheckoutButton } from "./checkoutButton";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

export default function LandingSection({className, title, description, checks, cta, img, alt, align = 'left'}) {
  const mediaQuery = window.matchMedia('(max-width: 1024px)');
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect(() => {
      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleResize);

      return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const x = isMobile ? 0 : (align === 'left' ? -300 : 300);
  const y = isMobile ? 50 : 0;

  return (
    <section className={cn(`flex ${align === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-image`, className)}>
      <motion.div
        className={`flex-[3] flex flex-col`}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: isMobile }}
        variants={{
          hidden: { x, y, opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
          },
        }}
      >
        <h2>{title}</h2>
        <p className="mb-paragraph" style={{
          maxWidth: "100%",
          "@media (min-width: 1024px)": {
            maxWidth: "500px",
          },
        }}>{description}</p>

        <div className={`flex flex-col ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} lg:flex-col gap-image`}>
          <div className="lg:hidden mx-auto max-w-[640px] md:order-2 md:w-[50%]"><Image src={img} alt={alt} className="aspect-auto rounded-xl" /></div>
          <div className="flex flex-col md:self-center lg:self-start lg:w-full">
            <ul className="mb-paragraph list-image-check list-inside">
              {checks.map((check, i) => <li key={i}>{check}</li>)}
            </ul>
            {cta && <CheckoutButton className="self-center" variant="outline">{cta}</CheckoutButton>}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex-[4] justify-center items-center hidden lg:flex"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { x: -x, y, opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
          },
        }}
      >
        <Image src={img} alt={alt} className="w-full max-h-full aspect-auto rounded-xl" />
      </motion.div>
    </section>
  )
}