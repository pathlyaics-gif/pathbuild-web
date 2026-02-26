import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PathBuild",
  description: "Privacy Policy for the PathBuild mobile application.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: February 16, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            PathBuild (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use the PathBuild mobile application (&ldquo;App&rdquo;).
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
              Sign-In, Google Sign-In, or email.
            </li>
            <li>
              <strong>Onboarding and profile data:</strong> Career preferences,
              skills, interests, education level, work experience, values,
              constraints, and goals you share during the onboarding
              questionnaire and while using the App.
            </li>
            <li>
              <strong>Optional free-text input:</strong> Any additional
              information you voluntarily provide in open-ended fields.
            </li>
            <li>
              <strong>Support communications:</strong> Information you share
              when contacting us for support.
            </li>
          </ul>

          <p>
            <strong>Information collected automatically:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Device information:</strong> Device type, operating
              system version, unique device identifiers, and general hardware
              information.
            </li>
            <li>
              <strong>Usage data:</strong> App interactions, features used,
              screens viewed, session duration, and crash reports.
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymized and aggregated usage
              patterns to help us improve the App.
            </li>
          </ul>

          <p>
            <strong>Information we do NOT collect:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Precise location data (GPS).</li>
            <li>Contacts, photos, or other media from your device.</li>
            <li>
              Financial or payment information (payments are processed by
              Apple).
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>
              Provide personalized career analysis, path recommendations, and
              roadmaps.
            </li>
            <li>
              Improve and optimize the App&apos;s features, content, and user
              experience.
            </li>
            <li>
              Communicate with you about updates, new features, or support
              requests.
            </li>
            <li>
              Detect, investigate, and prevent fraudulent or unauthorized
              activity.
            </li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. How We Share Your Information
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers:</strong> We may share data with
              trusted third-party service providers who help us operate the App
              (e.g., cloud hosting, analytics, AI processing). These providers
              are contractually obligated to protect your data.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information
              if required by law, regulation, legal process, or governmental
              request.
            </li>
            <li>
              <strong>Safety:</strong> We may share information to protect the
              safety, rights, or property of PathBuild, our users, or the
              public.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. AI and Data Processing
          </h2>
          <p>
            PathBuild uses artificial intelligence to generate career insights,
            path recommendations, and personalized roadmaps. Your onboarding
            responses and profile data may be processed by AI services (such as
            OpenAI) to deliver these features.
          </p>
          <p>We take the following precautions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Data sent to AI services is limited to what is necessary to
              generate your results.
            </li>
            <li>
              We do not send your name, email, or other directly identifying
              information to AI services.
            </li>
            <li>
              AI-generated content is for informational purposes only and is
              not a substitute for professional advice.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Data Retention
          </h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide you with the App&apos;s services. If
            you delete your account, we will delete or anonymize your personal
            data within 30 days, except where retention is required by law.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information, including encryption of data in
            transit and at rest, secure authentication mechanisms, and access
            controls. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. Your Rights and Choices
          </h2>
          <p>
            Depending on your jurisdiction, you may have rights regarding your
            personal information including access, correction, deletion,
            portability, objection, and withdrawal of consent. To exercise any
            of these rights, please contact us at{" "}
            <a
              href="mailto:support@pathbuild.app"
              className="text-accent hover:underline"
            >
              support@pathbuild.app
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Children&apos;s Privacy
          </h2>
          <p>
            PathBuild is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If you are a parent or guardian and believe your child has provided
            us with personal information, please contact us at{" "}
            <a
              href="mailto:support@pathbuild.app"
              className="text-accent hover:underline"
            >
              support@pathbuild.app
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            changes, we will update the &ldquo;Effective Date&rdquo; at the top
            of this page and notify you through the App or via email.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
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
