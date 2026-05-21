import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — PathBuild",
  description:
    "Terms of Service for the PathBuild mobile application. Read our terms and conditions for using PathBuild.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: March 31, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            Welcome to PathBuild. These Terms of Service (&ldquo;Terms&rdquo;)
            govern your access to and use of the PathBuild mobile application
            (&ldquo;App&rdquo;) and any related services provided by PathBuild
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
            downloading, installing, or using the App, you agree to be bound by
            these Terms.
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
            reviewed and agreed to these Terms on your behalf. By using the App,
            you represent and warrant that you meet these eligibility
            requirements.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Account Registration
          </h2>
          <p>
            To access certain features of the App, you may be required to create
            an account using Apple Sign-In, Google Sign-In, or email
            authentication. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide accurate, current, and complete information during
              registration.
            </li>
            <li>
              Maintain and promptly update your account information to keep it
              accurate and complete.
            </li>
            <li>
              Maintain the security of your account credentials and not share
              your login information with others.
            </li>
            <li>
              Notify us immediately of any unauthorized access to or use of your
              account.
            </li>
            <li>
              Accept responsibility for all activities that occur under your
              account.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. Description of the Service
          </h2>
          <p>
            PathBuild is an AI-powered job application tracker that helps users
            organize their job search, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Application tracking and pipeline management (Saved, Applied,
              Interview, Offer, Rejected)
            </li>
            <li>
              Gmail inbox integration — read-only OAuth to auto-detect recruiter
              emails and update application statuses
            </li>
            <li>
              Push notifications for interviews, offers, rejections, and
              follow-up reminders
            </li>
            <li>
              AI-powered role matching based on user profile and preferences
            </li>
            <li>AI-powered company matching and discovery</li>
            <li>Job posting fit analysis tools</li>
            <li>Follow-up reminders and per-application notes</li>
            <li>Weekly search digest and activity recaps</li>
          </ul>
          <p>
            The App is intended for informational and educational purposes only.
            PathBuild does not guarantee employment outcomes, salary levels, or
            career success.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the App for any unlawful or fraudulent purpose.</li>
            <li>
              Reverse engineer, decompile, disassemble, or otherwise attempt to
              derive the source code of any part of the App.
            </li>
            <li>
              Attempt to gain unauthorized access to our systems, servers,
              networks, or other users&apos; accounts.
            </li>
            <li>
              Use the App to harass, abuse, stalk, threaten, or harm another
              person.
            </li>
            <li>Transmit any viruses, malware, or other harmful code.</li>
            <li>
              Reproduce, distribute, publicly display, publicly perform, or
              create derivative works from the App or its content without our
              prior written consent.
            </li>
            <li>
              Use the App in any manner that could interfere with, disrupt,
              negatively affect, or inhibit other users from fully enjoying the
              App.
            </li>
            <li>
              Use automated scripts, bots, or other automated means to access
              the App.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Career Guidance Disclaimer
          </h2>
          <p>
            The role matches, company matches, job fit analyses, email status
            detections, and other insights provided by PathBuild are generated
            using artificial intelligence
            and algorithms based on your self-reported data. These are intended
            as guidance and informational tools only and should not be
            considered:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Professional career counseling or therapy</li>
            <li>Financial, legal, or investment advice</li>
            <li>
              Employment guarantees or promises of specific career outcomes
            </li>
            <li>Substitutes for professional judgment or consultation</li>
          </ul>
          <p>
            You acknowledge that career decisions involve personal judgment and
            that PathBuild&apos;s recommendations are starting points for your
            own exploration and decision-making.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Intellectual Property
          </h2>
          <p>
            All content, features, functionality, design, graphics, trademarks,
            logos, and software of the App are the exclusive property of
            PathBuild or its licensors and are protected by copyright,
            trademark, patent, trade secret, and other intellectual property
            laws. You are granted a limited, non-exclusive, non-transferable,
            revocable license to use the App for personal, non-commercial
            purposes in accordance with these Terms.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. Pricing and Subscriptions
          </h2>
          <p>
            PathBuild is currently free during early access. All features are
            available at no charge. We may introduce paid subscription plans
            in the future; if we do, the following would apply:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Payment:</strong> If offered, payment would be charged to
              your Apple ID account at confirmation of purchase.
            </li>
            <li>
              <strong>Auto-Renewal:</strong> Subscriptions would automatically
              renew unless auto-renew is turned off at least 24 hours before the
              end of the current period.
            </li>
            <li>
              <strong>Managing Subscriptions:</strong> You can manage and cancel
              subscriptions through your Apple ID Account Settings (Settings →
              Apple ID → Subscriptions → PathBuild).
            </li>
            <li>
              <strong>Refunds:</strong> Refunds are handled by Apple in
              accordance with their refund policy. To request a refund, visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                reportaproblem.apple.com
              </a>
              .
            </li>
          </ul>
          <p>
            See our{" "}
            <a
              href="/legal/subscription"
              className="text-accent hover:underline"
            >
              Subscription Terms
            </a>{" "}
            for full details on how paid plans would work if introduced.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. User Content
          </h2>
          <p>
            You retain ownership of any content you submit to the App, including
            questionnaire responses, profile information, and text inputs. By
            submitting content, you grant PathBuild a non-exclusive, worldwide,
            royalty-free license to use, process, and analyze your content solely
            for the purpose of providing and improving the App&apos;s services.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Third-Party Services
          </h2>
          <p>
            The App may integrate with or link to third-party services,
            including Apple services, AI processing services, and analytics
            providers. Your use of such third-party services is subject to their
            respective terms and privacy policies. PathBuild is not responsible
            for the content, policies, or practices of any third-party services.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            10. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the App
            at any time, with or without cause, with or without notice. You may
            delete your account at any time through the App&apos;s settings.
            Upon termination, your right to use the App will immediately cease.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            11. Disclaimers
          </h2>
          <p>
            THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
            SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT
            WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT,
            CAREER RECOMMENDATIONS, OR OTHER INFORMATION PROVIDED THROUGH THE
            APP.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            12. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PATHBUILD AND ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE
            OF OR INABILITY TO USE THE APP.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO
            US IN THE TWELVE (12) MONTHS PRECEDING THE DATE OF THE CLAIM, OR
            ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            13. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless PathBuild and its
            officers, directors, employees, agents, and affiliates from and
            against any and all claims, liabilities, damages, losses, costs,
            expenses, or fees (including reasonable attorneys&apos; fees) arising
            from your use of the App, your violation of these Terms, or your
            violation of any rights of another.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            14. Governing Law and Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the United States, without regard to conflict of law
            provisions. Any disputes arising out of or relating to these Terms
            shall be resolved through good-faith negotiation. If negotiation
            fails, disputes shall be submitted to binding arbitration in
            accordance with the rules of the American Arbitration Association.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            15. Apple-Specific Terms (Licensed Application End User License
            Agreement)
          </h2>
          <p>
            This section applies to your use of the App as downloaded from the
            Apple App Store:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms are between you and PathBuild only, not Apple Inc.
              (&ldquo;Apple&rdquo;). PathBuild, not Apple, is solely responsible
              for the App and its content.
            </li>
            <li>
              The license granted to you for the App is limited to a
              non-transferable license to use the App on any Apple-branded
              products that you own or control, as permitted by the Usage Rules
              set forth in the Apple Media Services Terms and Conditions.
            </li>
            <li>
              PathBuild, not Apple, is responsible for providing any maintenance
              and support services for the App. Apple has no obligation to
              furnish any maintenance or support services with respect to the
              App.
            </li>
            <li>
              In the event of any failure of the App to conform to any
              applicable warranty, you may notify Apple, and Apple will refund
              the purchase price (if any) for the App. To the maximum extent
              permitted by applicable law, Apple has no other warranty obligation
              with respect to the App.
            </li>
            <li>
              PathBuild, not Apple, is responsible for addressing any claims
              relating to the App or your possession and/or use of the App,
              including but not limited to: (i) product liability claims; (ii)
              any claim that the App fails to conform to any applicable legal or
              regulatory requirement; and (iii) claims arising under consumer
              protection, privacy, or similar legislation.
            </li>
            <li>
              In the event of any third-party claim that the App or your
              possession and use of the App infringes that third party&apos;s
              intellectual property rights, PathBuild, not Apple, will be solely
              responsible for the investigation, defense, settlement, and
              discharge of any such intellectual property infringement claim.
            </li>
            <li>
              You represent and warrant that (i) you are not located in a
              country that is subject to a U.S. Government embargo or that has
              been designated by the U.S. Government as a &ldquo;terrorist
              supporting&rdquo; country; and (ii) you are not listed on any U.S.
              Government list of prohibited or restricted parties.
            </li>
            <li>
              Apple and its subsidiaries are third-party beneficiaries of these
              Terms. Upon your acceptance of these Terms, Apple will have the
              right (and will be deemed to have accepted the right) to enforce
              these Terms against you as a third-party beneficiary.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            16. Severability
          </h2>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or
            unenforceable, the remaining provisions shall continue in full force
            and effect.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            17. Entire Agreement
          </h2>
          <p>
            These Terms, together with our{" "}
            <a
              href="/legal/privacy"
              className="text-accent hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/legal/subscription"
              className="text-accent hover:underline"
            >
              Subscription Terms
            </a>
            , constitute the entire agreement between you and PathBuild regarding
            your use of the App.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            18. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. When we make material
            changes, we will update the &ldquo;Effective Date&rdquo; at the top
            of this page and notify you through the App or via email. Your
            continued use of the App after changes become effective constitutes
            your acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            19. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
