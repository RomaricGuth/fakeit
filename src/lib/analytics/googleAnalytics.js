'use client'

import 'client-only'
import Script from "next/script"
import { useEffect } from "react"

export function sendGoogleData(type, name, params) {
  if (typeof gtag === "function") {
    gtag(type, name, params)
  } else {
    setTimeout(() => sendGoogleData(type, name, params), 5000)
  }
}

export function getConsent() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('ga_cookie_optout') ? false : true;
  }
  return true; // Default to true if window is not defined
}

export function setConsent(value) {
  if (typeof window !== 'undefined') {
    if (value) {
      localStorage.removeItem('ga_cookie_optout');
    } else {
      localStorage.setItem('ga_cookie_optout', 'true');
    }
    sendGoogleData('consent', 'update', {
      'analytics_storage': value ? 'granted' : 'denied'
    });
  }
}

const GoogleAnalyticsScript = () => {

    useEffect(() => {
      setConsent(getConsent())
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true,
                        debug_mode: ${process.env.NODE_ENV === 'development'}
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalyticsScript
