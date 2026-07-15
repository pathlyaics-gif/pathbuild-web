/* FOUNDER/LEGAL REVIEW REQUIRED BEFORE PRODUCTION — revised draft reconciling product reality (approve-then-submit, employer sharing on approval, browser automation, live paid subscriptions). Confirm sub-processor names + effective date. */

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { PRIVACY_EMAIL, PRIVACY_MAILTO } from "@/lib/site";

// Unified effective date across all PathBuild legal pages.
// TODO(founder): confirm the real effective date before production.
const EFFECTIVE_DATE = "July 15, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — PathBuild",
  description:
    "How PathBuild collects, uses, and shares your information — including your résumé, application documents, and answers, which are shared with an employer only when you approve that specific application.",
};

const TOC = [
  { id: "collect", label: "1. Information we collect" },
  { id: "use", label: "2. How we use your information" },
  { id: "employers", label: "3. Sharing with employers" },
  { id: "automation", label: "4. Automated form-filling" },
  { id: "email", label: "5. Application email & replies" },
  { id: "push", label: "6. Push notifications" },
  { id: "providers", label: "7. Service providers & sub-processors" },
  { id: "ai", label: "8. AI processing" },
  { id: "retention", label: "9. Data retention" },
  { id: "rights", label: "10. Your rights and choices" },
  { id: "deletion", label: "11. Deleting your account and data" },
  { id: "security", label: "12. Data security" },
  { id: "children", label: "13. Children's privacy" },
  { id: "international", label: "14. International data transfers" },
  { id: "california", label: "15. California privacy rights" },
  { id: "att", label: "16. App Tracking Transparency" },
  { id: "changes", label: "17. Changes to this policy" },
  { id: "contact", label: "18. Contact us" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
      toc={TOC}
    >
      <p>
        PathBuild (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This Privacy Policy explains how we collect, use,
        and share your information when you use the PathBuild mobile application
        (&ldquo;App&rdquo;), an iPhone job-search and application assistant
        available through the Apple App Store. By using the App, you agree to the
        collection and use of information as described here. If you do not agree,
        please do not use the App.
      </p>

      <h2 id="collect">1. Information we collect</h2>
      <p>
        <strong>Information you provide directly.</strong> To help you find and
        apply for jobs, PathBuild collects the information you give it, including:
      </p>
      <ul>
        <li>
          <strong>Account information:</strong> your name, email address, and
          authentication credentials when you sign in with Apple, Google, or
          email.
        </li>
        <li>
          <strong>Résumé, CV, and application documents:</strong> the résumé or
          CV and any other documents or written materials you upload or create in
          the App to apply for jobs.
        </li>
        <li>
          <strong>Education and employment history:</strong> the schools,
          qualifications, past roles, dates, and related details you add to your
          profile.
        </li>
        <li>
          <strong>Contact details:</strong> the phone number, email address, and
          any other contact information you provide for your applications.
        </li>
        <li>
          <strong>Job preferences:</strong> the roles, locations, pay ranges, and
          other preferences you set.
        </li>
        <li>
          <strong>Application answers:</strong> the answers you give to employer
          application questions, and anything you add to complete a specific
          application.
        </li>
        <li>
          <strong>Support communications:</strong> information you share when you
          contact us for support or feedback.
        </li>
      </ul>
      <p>
        <strong>Information collected automatically.</strong>
      </p>
      <ul>
        <li>
          <strong>Device information:</strong> device type, operating-system
          version, and a device identifier (such as the identifier for vendor,
          IDFV).
        </li>
        <li>
          <strong>Usage data:</strong> features used, screens viewed, session
          activity, timestamps, and crash or error reports.
        </li>
        <li>
          <strong>Subscription data:</strong> subscription status, plan type,
          trial eligibility, and transaction information provided by Apple.
        </li>
        <li>
          <strong>Push-notification token:</strong> if you enable notifications
          (see section 6).
        </li>
      </ul>
      <p>
        <strong>Information we do not collect.</strong> PathBuild does not collect
        your precise (GPS) location; your device&rsquo;s contacts, photos, camera,
        or microphone; your payment-card, bank, or other financial details (Apple
        processes all payments); health or biometric data; or the advertising
        identifier (IDFA).
      </p>

      <h2 id="use">2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>
          Score jobs from 0 to 100 for how well they fit your profile, and explain
          the reasons.
        </li>
        <li>
          Prepare and tailor your applications from the information you provide,
          using AI processing (see section 8).
        </li>
        <li>
          Fill and submit supported employer forms after you approve them, and
          hand off external-apply roles to the employer&rsquo;s own website.
        </li>
        <li>Track the status of your applications.</li>
        <li>
          Send application email and collect employer replies, and show them to
          you in the App (see sections 4 and 5).
        </li>
        <li>Send push notifications you have enabled.</li>
        <li>
          Provide support, improve the App, keep it secure, and detect and prevent
          fraud or abuse.
        </li>
        <li>Comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2 id="employers">3. Sharing your application information with employers</h2>
      <p>
        <strong>
          PathBuild shares your application information — including your documents
          and answers — with an employer only when you review and approve that
          specific application.
        </strong>
      </p>
      <p>
        For supported employer forms, once you approve an application, PathBuild
        submits the information you approved — which may include your name,
        contact details, résumé or CV, education and employment history, and your
        application answers — to that employer through their application system.
        For external-apply roles, you submit your application on the
        employer&rsquo;s own website. We do not send your application information
        to any employer you have not approved for that specific application.
      </p>
      <p>
        We do not sell, rent, or trade your personal information, and we do not
        share it with employers, recruiters, or anyone else for advertising. Once
        an application has been delivered to an employer, that employer handles
        your information under its own privacy practices, which are outside our
        control.
      </p>

      <h2 id="automation">4. Automated form-filling and employer websites</h2>
      <p>
        To submit supported applications, PathBuild uses automated,
        browser-based form-filling to enter the information you approved into an
        employer&rsquo;s online application form on your behalf. This is carried
        out through a third-party browser-automation provider that processes your
        approved application data for us. Some steps must be completed by you,
        such as a verification or CAPTCHA; PathBuild pauses and asks you to
        complete them. PathBuild interacts with employer websites only to prepare
        and submit applications you have approved.
      </p>

      <h2 id="email">5. Application email and employer replies</h2>
      <p>
        PathBuild verifies an email address used for your job applications and
        monitors that mailbox for replies from employers. We collect and store
        those replies and related messages so we can show them to you in the App,
        linked to the relevant application. Sending and monitoring this email is
        carried out through a third-party email-delivery provider on our behalf.
      </p>

      <h2 id="push">6. Push notifications</h2>
      <p>
        If you enable notifications, we store a push-notification token issued by
        Apple so we can send you updates about your applications and employer
        replies. You can turn notifications off at any time in your device
        settings.
      </p>

      <h2 id="providers">7. Service providers and sub-processors</h2>
      <p>
        We share your information with service providers that process it on our
        behalf, under contracts that require them to protect it and use it only to
        provide services to us. Described by category, these include:
      </p>
      <ul>
        <li>
          <strong>Cloud hosting and database providers</strong> that store your
          account and application data (we currently use Supabase).
        </li>
        <li>
          <strong>A third-party browser-automation provider</strong> that submits
          supported applications on your behalf.
        </li>
        <li>
          <strong>A third-party email-delivery provider</strong> that sends and
          monitors application email.
        </li>
        <li>
          <strong>Third-party AI processing providers</strong> that help score
          jobs and prepare your application materials.
        </li>
      </ul>
      {/* TODO(founder): confirm/name exact sub-processors: Browserbase, Railway, Postmark, AI provider */}
      <p>
        We may also disclose information to Apple (for subscriptions and payments),
        where required by law or legal process, to protect the safety, rights, or
        property of PathBuild or others, or as part of a business transfer such as
        a merger, acquisition, or sale of assets (in which case we will notify
        you).
      </p>

      <h2 id="ai">8. AI processing</h2>
      <p>
        PathBuild uses artificial intelligence to score jobs and to prepare and
        tailor your application materials. To do this, information such as your
        profile, your résumé or CV, your application answers, and the details of
        the jobs you are considering is processed by third-party AI providers
        acting on our behalf. AI output can be wrong or incomplete, and you review
        each application before it is submitted. AI-generated content is provided
        as a tool to help you and is not professional career, financial, or legal
        advice.
      </p>

      <h2 id="retention">9. Data retention</h2>
      <p>
        We keep your personal information for as long as your account is active or
        as needed to provide the App&rsquo;s services. If you delete your account,
        we delete or de-identify your personal data within 30 days, except where
        we must retain it to meet a legal obligation, resolve a dispute, or enforce
        our agreements. Application records that have already been delivered to an
        employer are held by that employer under its own policies and are outside
        our control. Anonymized or aggregated data that cannot identify you may be
        retained for analytics and service improvement.
      </p>

      <h2 id="rights">10. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the following rights over your
        personal information:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> request a copy of the information we hold about
          you.
        </li>
        <li>
          <strong>Correction:</strong> ask us to correct inaccurate or incomplete
          information.
        </li>
        <li>
          <strong>Export (portability):</strong> request a copy of your data in a
          commonly used, portable format.
        </li>
        <li>
          <strong>Deletion:</strong> ask us to delete your personal information,
          or delete your account and data yourself from within the App (see
          section 11).
        </li>
        <li>
          <strong>Objection or restriction:</strong> object to or ask us to
          restrict certain processing.
        </li>
        <li>
          <strong>Withdrawal of consent:</strong> withdraw consent you previously
          gave for processing your information.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>. We will respond within 30
        days.
      </p>

      <h2 id="deletion">11. Deleting your account and data</h2>
      <p>
        You can delete your account and its associated data at any time from
        inside the App (Settings → Delete Account). You can also ask us to delete
        your data by emailing{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>. Deleting your account removes
        your PathBuild profile, documents, and application records from our active
        systems within 30 days, subject to the retention exceptions in section 9.
        Applications already delivered to an employer cannot be recalled from that
        employer.
      </p>

      <h2 id="security">12. Data security</h2>
      <p>
        We use appropriate technical and organizational measures to protect your
        information, including:
      </p>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest.</li>
        <li>Secure authentication, including support for Apple Sign-In.</li>
        <li>Role-based access controls limiting who can access your data.</li>
        <li>Regular security reviews and monitoring.</li>
      </ul>
      <p>
        No method of transmission or storage is completely secure. While we work
        to protect your information, we cannot guarantee its absolute security.
      </p>

      <h2 id="children">13. Children&apos;s privacy</h2>
      <p>
        PathBuild is not intended for children under 13, and we do not knowingly
        collect personal information from them. If you believe a child under 13
        has provided us with personal information, contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a> and we will take steps to
        delete it.
      </p>

      <h2 id="international">14. International data transfers</h2>
      <p>
        Your information may be processed and stored in countries other than your
        own, which may have different data-protection laws. By using the App, you
        consent to these transfers. We take steps to ensure your information
        receives an adequate level of protection wherever it is processed.
      </p>

      <h2 id="california">15. California privacy rights</h2>
      <p>
        If you are a California resident, you have rights under the California
        Consumer Privacy Act (CCPA), including the right to know what personal
        information we collect, the right to request deletion, and the right to
        opt out of the sale of personal information. We do not sell personal
        information. To exercise your CCPA rights, contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>.
      </p>

      <h2 id="att">16. App Tracking Transparency</h2>
      <p>
        PathBuild does not track you across other companies&apos; apps or websites
        for advertising, and we do not use the advertising identifier (IDFA). We
        comply with Apple&rsquo;s App Tracking Transparency framework.
      </p>

      <h2 id="changes">17. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material
        changes, we will update the effective date at the top of this page and
        notify you through the App or via email. Your continued use of the App
        after changes take effect constitutes your acceptance of the revised
        policy.
      </p>

      <h2 id="contact">18. Contact us</h2>
      <p>
        If you have questions or requests about this Privacy Policy or our data
        practices, contact us at{" "}
        <a href={PRIVACY_MAILTO}>{PRIVACY_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
