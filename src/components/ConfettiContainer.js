"use client";

import { useRef } from "react";

import Confetti from "@/components/magicui/confetti";

export default function ConfettiContainer({children}) {
  const confettiRef = useRef(null);

  return (
    <div className="relative">
      {children}
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-1 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
