import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PathBuild",
  description: "Terms of Service for the PathBuild mobile application.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: February 16, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            Welcome to PathBuild. These Terms of Service
            (&ldquo;Terms&rdquo;) govern your access to and use of the
            PathBuild mobile application (&ldquo;App&rdquo;) and any related
            services provided by PathBuild (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading,
            installing, or using the App, you agree to be bound by these Terms.
          </p>
          <p>
            If you do not agree to these Terms, please do not use the App.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            1. Eligibility
          </h2>
          <p>
            You must be at least 13 years of age to use PathBuild. If you are
            under 18, you represent that your parent or legal guardian has
            reviewed and agreed to these Terms on your behalf.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Account Registration
          </h2>
          <p>
            To access certain features, you may be required to create an
            account using Apple Sign-In, Google Sign-In, or email
            authentication. You agree to provide accurate information, keep
            your credentials secure, and notify us of any unauthorized access.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. Use of the App
          </h2>
          <p>
            PathBuild provides career exploration and guidance tools, including
            personality-based career matching, self-assessment questionnaires,
            and personalized roadmaps. The App is intended for informational
            and educational purposes only.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the App for any unlawful or fraudulent purpose.</li>
            <li>
              Reverse engineer, decompile, or disassemble any part of the App.
            </li>
            <li>
              Attempt to gain unauthorized access to our systems or other
              users&apos; accounts.
            </li>
            <li>Use the App to harass, abuse, or harm another person.</li>
            <li>Transmit any viruses, malware, or other harmful code.</li>
            <li>
              Reproduce, distribute, or create derivative works from the App
              without our prior written consent.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. Career Guidance Disclaimer
          </h2>
          <p>
            The career suggestions, roadmaps, and insights provided by
            PathBuild are generated using artificial intelligence and algorithms
            based on your self-reported data. These are intended as guidance
            only and should not be considered professional career counseling,
            financial advice, or employment guarantees.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Intellectual Property
          </h2>
          <p>
            All content, features, and functionality of the App are the
            exclusive property of PathBuild and are protected by copyright,
            trademark, and other intellectual property laws. You are granted a
            limited, non-exclusive, non-transferable, revocable license to use
            the App for personal, non-commercial purposes.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Subscriptions and Payments
          </h2>
          <p>
            PathBuild may offer subscription-based premium features. Payment
            will be charged to your Apple ID account at confirmation of
            purchase. Subscriptions automatically renew unless canceled at
            least 24 hours before the end of the current period. You can manage
            subscriptions in your Apple ID Account Settings.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            App at any time, with or without cause. You may delete your account
            at any time through the App&apos;s settings.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Disclaimers
          </h2>
          <p>
            THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PATHBUILD SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
            YOUR USE OF THE APP.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            10. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. When we make changes,
            we will update the &ldquo;Effective Date&rdquo; and notify you
            through the App or via email.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            11. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:support@pathbuild.app"
              className="text-accent hover:underline"
            >
              support@pathbuild.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
