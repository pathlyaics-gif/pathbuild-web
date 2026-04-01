import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — PathBuild",
  description:
    "Privacy Policy for the PathBuild mobile application. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: March 31, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            PathBuild (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use the PathBuild mobile application (&ldquo;App&rdquo;),
            available on iOS through the Apple App Store.
          </p>
          <p>
            By using the App, you agree to the collection and use of
            information in accordance with this Privacy Policy. If you do not
            agree, please do not use the App.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            1. Information We Collect
          </h2>

          <p>
            <strong>Information you provide directly:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account information:</strong> Name, email address, and
              authentication credentials when you create an account via Apple
              Sign-In, Google Sign-In, or email authentication.
            </li>
            <li>
              <strong>Onboarding and profile data:</strong> Career preferences,
              skills, interests, education level, work experience, values,
              constraints (such as time, budget, location), and career goals you
              share during the onboarding questionnaire and while using the App.
            </li>
            <li>
              <strong>Career activity data:</strong> Steps completed, milestones
              achieved, streaks, roadmap selections, job postings analyzed, and
              other interactions with career planning features.
            </li>
            <li>
              <strong>Optional free-text input:</strong> Any additional
              information you voluntarily provide in open-ended fields,
              including job posting text for analysis.
            </li>
            <li>
              <strong>Support communications:</strong> Information you share
              when contacting us for support, feedback, or inquiries.
            </li>
          </ul>

          <p>
            <strong>Information collected automatically:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Device information:</strong> Device type, operating system
              version, unique device identifiers (such as IDFV), and general
              hardware information.
            </li>
            <li>
              <strong>Usage data:</strong> App interactions, features used,
              screens viewed, session duration, timestamps, and crash/error
              reports.
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymized and aggregated usage
              patterns to help us understand how the App is used and improve our
              services.
            </li>
            <li>
              <strong>Subscription data:</strong> Subscription status, plan
              type, trial eligibility, and transaction information as provided by
              Apple StoreKit.
            </li>
          </ul>

          <p>
            <strong>Information we do NOT collect:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Precise location data (GPS). We do not request or access your
              device&apos;s location.
            </li>
            <li>Contacts, photos, camera, microphone, or other media from your device.</li>
            <li>
              Financial or payment information. All payments are processed
              directly by Apple through the App Store. We do not have access to
              your credit card number, bank account, or other financial details.
            </li>
            <li>Health data or biometric data.</li>
            <li>Advertising identifiers (IDFA).</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>
              Provide personalized career analysis, path recommendations,
              roadmaps, action plans, and coaching.
            </li>
            <li>
              Power features such as the Job Fit Analyzer, Resume Builder,
              and Weekly AI Coaching.
            </li>
            <li>
              Track your progress, maintain streaks, and generate insights and
              recaps.
            </li>
            <li>
              Improve and optimize the App&apos;s features, content, AI models,
              and user experience.
            </li>
            <li>
              Communicate with you about updates, new features, or support
              requests.
            </li>
            <li>
              Detect, investigate, and prevent fraudulent, unauthorized, or
              illegal activity.
            </li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. How We Share Your Information
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. We will never sell your data. We may share your information
            only in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers:</strong> We may share data with trusted
              third-party service providers who help us operate the App,
              including cloud hosting (Supabase), AI processing services, and
              analytics tools. These providers are contractually obligated to
              protect your data, use it only for the services they provide to
              us, and not disclose it to other parties.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information if
              required by law, regulation, legal process, court order, or
              governmental request.
            </li>
            <li>
              <strong>Safety:</strong> We may share information to protect the
              safety, rights, or property of PathBuild, our users, or the
              public.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger,
              acquisition, reorganization, or sale of assets, your information
              may be transferred as part of that transaction. We will notify you
              of any such change.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. AI and Data Processing
          </h2>
          <p>
            PathBuild uses artificial intelligence to generate career insights,
            path recommendations, roadmaps, coaching content, job fit analyses,
            and resume content. Your onboarding responses, profile data, and
            activity data may be processed by AI services to deliver these
            features.
          </p>
          <p>We take the following precautions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Data sent to AI services is limited to what is necessary to
              generate your personalized results.
            </li>
            <li>
              We do not send your name, email address, or other directly
              identifying information to AI services.
            </li>
            <li>
              AI-generated content is for informational and educational purposes
              only and is not a substitute for professional career counseling,
              financial advice, or therapy.
            </li>
            <li>
              We regularly review and audit our AI processing practices to
              ensure compliance with our privacy commitments.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Data Retention
          </h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide you with the App&apos;s services. If
            you delete your account, we will delete or anonymize your personal
            data within 30 days, except where retention is required by law or
            necessary for legitimate business purposes (such as resolving
            disputes or enforcing our agreements).
          </p>
          <p>
            Anonymized and aggregated data that cannot be used to identify you
            may be retained indefinitely for analytics and service improvement
            purposes.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit (TLS/SSL) and at rest.</li>
            <li>Secure authentication mechanisms, including support for Apple Sign-In.</li>
            <li>Role-based access controls limiting who can access your data.</li>
            <li>Regular security reviews and monitoring.</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. Your Rights and Choices
          </h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request that we correct inaccurate or
              incomplete personal information.
            </li>
            <li>
              <strong>Deletion:</strong> Request that we delete your personal
              information. You can also delete your account directly within the
              App (Settings → Delete Account).
            </li>
            <li>
              <strong>Portability:</strong> Request a portable copy of your data
              in a commonly used format.
            </li>
            <li>
              <strong>Objection:</strong> Object to certain processing of your
              personal information.
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw any consent you
              have previously provided for the processing of your personal
              information.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . We will respond to your request within 30 days.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Children&apos;s Privacy
          </h2>
          <p>
            PathBuild is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13. If
            you are a parent or guardian and believe your child has provided us
            with personal information, please contact us immediately at{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information
            promptly.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. International Data Transfers
          </h2>
          <p>
            Your information may be processed and stored in countries other than
            your country of residence. By using the App, you consent to the
            transfer of your information to countries that may have different
            data protection laws than your jurisdiction. We take steps to ensure
            that your data receives an adequate level of protection wherever it
            is processed.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            10. California Privacy Rights (CCPA)
          </h2>
          <p>
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act (CCPA), including the right to
            know what personal information we collect, the right to request
            deletion, and the right to opt-out of the sale of personal
            information. We do not sell personal information. To exercise your
            CCPA rights, contact us at{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            11. Apple App Tracking Transparency
          </h2>
          <p>
            PathBuild does not track you across other companies&apos; apps or
            websites for advertising purposes. We do not use the IDFA
            (Identifier for Advertisers). We comply with Apple&apos;s App
            Tracking Transparency framework.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            12. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will update the &ldquo;Effective Date&rdquo; at
            the top of this page and notify you through the App or via email.
            Your continued use of the App after changes become effective
            constitutes your acceptance of the revised Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            13. Contact Us
          </h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:{" "}
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
