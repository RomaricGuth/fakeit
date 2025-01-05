import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - FakeIT",
  description: "This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.",
};

export default function PrivacyPolicy() {
  return (
    <article className="p-8">
      <h1>Privacy Policy</h1>

      <p>Last updated on 2024-12-29</p>
      <p>Welcome to <strong>{process.env.NEXT_PUBLIC_HOSTNAME}</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>

      <div className="mt-16 flex flex-col gap-paragraph">
        <div>
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
              <li><strong>Personal Information You Provide:</strong> When you submit forms on our website, we collect the data you provide such as your email address. We ask only for relevant data.</li>
              <li><strong>Analytics Data:</strong> We use Google Analytics to collect data about your usage of our website, such as pages visited, time spent on the site, and interactions. This helps us improve our website and services.</li>
          </ul>
        </div>
        <div>
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
              <li>To send newsletters and updates (using Brevo as our email service provider).</li>
              <li>To analyze website usage and improve user experience through Google Analytics.</li>
              <li>To respond to inquiries or feedback submitted via forms on our website.</li>
          </ul>
        </div>
        <div>
          <h2>3. Cookies</h2>
          <p>We use cookies to enhance your experience on our website. Specifically:</p>
          <ul>
              <li><strong>Google Analytics Cookies:</strong> These cookies are used to measure audience statistics and improve the website. They are enabled by default unless you opt out.</li>
          </ul>
          <p>You can opt out of analytics cookies at any time through the settings provided in our <a href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</a>.</p>
        </div>
        <div>
          <h2>4. Sharing of Information</h2>
          <p>We do not sell or share your personal information with third parties, except as necessary to provide our services:</p>
          <ul>
              <li><strong>Google Analytics:</strong> For analytics purposes (data anonymized where possible).</li>
              <li><strong>Brevo:</strong> To send newsletters and updates.</li>
          </ul>
        </div>
        <div>
          <h2>5. User Rights</h2>
          <p>As a user, you have the following rights:</p>
          <ul>
              <li>The right to access your personal data.</li>
              <li>The right to request correction or deletion of your data.</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:contact@fakeit.pro">contact@fakeit.pro</a>.</p>
        </div>
        <div>
          <h2>6. Data Security</h2>
          <p>We take reasonable measures to protect your data from unauthorized access, disclosure, or loss. However, no system is completely secure, and we cannot guarantee absolute security of your data.</p>
        </div>
        <div>
          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.</p>
        </div>
        <div>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how your data is handled, please contact us at:</p>
          <p>Email: <a href="mailto:contact@dropit.com">contact@dropit.com</a></p>
        </div>
      </div>

    </article>
  );
}
