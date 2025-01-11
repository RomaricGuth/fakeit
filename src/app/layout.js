import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import { Toaster } from "@/components/ui/sonner"
import Link from "next/link";
import Copyright from "@/components/copyright";
import GoogleAnalyticsScript from "@/lib/analytics/googleAnalytics";
import { CheckoutButton } from "@/components/checkoutButton";
import ContactForm from "@/components/contactForm";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title  = "Test your business idea | FakeIT";
const description = "Create fake landing pages, track and analyze traffic, collect emails and gather feedback.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `https://www.${process.env.NEXT_PUBLIC_HOSTNAME}`, // Update to your domain
    siteName: "FakeIT",
    images: [
      {
        url: `https://www.${process.env.NEXT_PUBLIC_HOSTNAME}/assets/logo.png`, // Update to your domain
        width: 1200,
        height: 630,
        alt: "Logo FakeIT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`https://www.${process.env.NEXT_PUBLIC_HOSTNAME}/assets/logo.png`],
  },
  alternates: {
    canonical: `https://www.${process.env.NEXT_PUBLIC_HOSTNAME}`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalyticsScript />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <header className="p-6">
          <nav className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <Link href="/"><Image src={logo} alt="Logo fakeit" width={100} height={50} /></Link>
            <div className="flex gap-paragraph items-center">
              <Link className="hidden sm:inline" href="/#features">Features</Link>
              <Link className="hidden sm:inline" href="/#pricing">Pricing</Link>
              <CheckoutButton className="rounded-none">Sign up</CheckoutButton>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-white p-8 w-full mt-16">
          <div className="flex flex-col sm:flex-row-reverse justify-between max-w-[1200px] gap-image mx-auto">
            <div className="w-[600px] max-w-full">
              <div className="text-xl font-bold mb-title">Contact</div>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-paragraph self-center">
              <div>
                <div className="text-lg font-bold mb-title">Legal</div>
                <ul className="space-y-1">
                  <li><Link className="hover:underline" href="/legal/privacy">Privacy policy</Link></li>
                  <li><Link className="hover:underline" href="/legal/cookies">Cookie policy</Link></li>
                </ul>
              </div>
              <div>
                <Image src={logo} alt="Logo fakeit" height={80} />
                <p className="text-muted-foreground mt-title">
                  Validate your business idea in 2 hours with market data<br />
                  <Copyright />
                </p>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
