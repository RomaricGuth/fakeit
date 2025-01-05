"use client"

import { Button } from "@/components/ui/button";
import { getConsent, setConsent } from "@/lib/analytics/googleAnalytics";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [gaConsent, setGaConsent] = useState(getConsent());

  useEffect(() => {
    setConsent(gaConsent);
  }, [gaConsent]);

  return (
    <div>
      Optional cookies are currently <strong>{gaConsent ? 'enabled' : 'disabled'}</strong>.
      <Button variant="link" className="inline -ml-4" onClick={() => setGaConsent(!gaConsent)}>{gaConsent ? 'OPT OUT' : 'OPT IN'}</Button>
    </div>
  );
}