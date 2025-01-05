import CookieConsent from "@/components/cookieConsent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata = {
  title: "Cookie Policy - FakeIT",
  description: "Cookie Policy for FakeIT, a tool to test your business ideas with market data.",
};

function CookiePolicy() {
  const googleId = process.env.NEXT_PUBLIC_GA_ID.substring(2);
  return (
    <article className="p-8">
      <h1>Cookie Policy</h1>
      <div>
        <p>This website uses cookies to measure audience and improve user experience. Optional cookies for analytics are enabled by default, but you may opt out at any time.</p>
        <CookieConsent />
      </div>

      {/* <h2 className="mt-8">Essential Cookies</h2>

      <p className="my-4">We use Stripe to manage online payments on our website.</p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cookie Name</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Validity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>__stripe_mid</TableCell>
            <TableCell>Stripe is used to process credit card payments. This cookie helps Stripe remember the user and process payments securely without storing any credit card information on our servers.</TableCell>
            <TableCell>1 year</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>__stripe_sid</TableCell>
            <TableCell>Stripe is used to process credit card payments. This cookie helps Stripe remember the user and process payments securely without storing any credit card information on our servers.</TableCell>
            <TableCell>30 minutes</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}

      <h2 className="mt-paragraph">Analytics Cookies</h2>

      <p className="my-4">We use Google Analytics to measure website audience and improve our services.</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cookie Name</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Validity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>_ga</TableCell>
            <TableCell>Used to identify unique visitors to the website</TableCell>
            <TableCell>2 years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>_ga_{googleId}</TableCell>
            <TableCell>Stores session information for Google Analytics</TableCell>
            <TableCell>2 years</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  );
}

export default CookiePolicy;
