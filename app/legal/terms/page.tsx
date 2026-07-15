/* FOUNDER/LEGAL REVIEW REQUIRED BEFORE PRODUCTION — revised draft reconciling product reality (approve-then-submit, employer sharing on approval, browser automation, live paid subscriptions). Confirm sub-processor names + effective date. */

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  MONTHLY_PRICE,
  ANNUAL_PRICE,
  TRIAL_DAYS,
} from "@/lib/site";

// Unified effective date across all PathBuild legal pages.
// TODO(founder): confirm the real effective date before production.
const EFFECTIVE_DATE = "July 15, 2026";

export const metadata: Metadata = {
  title: "Terms of Service — PathBuild",
  description:
    "The terms for using PathBuild, the iPhone job-search and application assistant — including how automated application submission after your approval and PathBuild Pro subscriptions work.",
};

const TOC = [
  { id: "eligibility", label: "1. Who can use PathBuild" },
  { id: "account", label: "2. Your account" },
  { id: "service", label: "3. What PathBuild does" },
  { id: "applications", label: "4. Applications & automated submission" },
  { id: "ai", label: "5. AI & no guarantee of outcomes" },
  { id: "acceptable-use", label: "6. Acceptable use" },
  { id: "content", label: "7. Your content" },
  { id: "subscriptions", label: "8. Subscriptions & payments" },
  { id: "third-parties", label: "9. Third-party services" },
  { id: "termination", label: "10. Termination" },
  { id: "disclaimers", label: "11. Disclaimers" },
  { id: "liability", label: "12. Limitation of liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "governing-law", label: "14. Governing law & disputes" },
  { id: "apple", label: "15. Apple App Store terms" },
  { id: "changes", label: "16. Changes to these terms" },
  { id: "contact", label: "17. Contact us" },
];

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate={EFFECTIVE_DATE} toc={TOC}>
      <p>
        Welcome to PathBuild. These Terms of Service (&ldquo;Terms&rdquo;) govern
        your access to and use of the PathBuild mobile application
        (&ldquo;App&rdquo;) and any related services provided by PathBuild
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
        downloading, installing, or using the App, you agree to be bound by these
        Terms. If you do not agree, please do not use the App.
      </p>

      <h2 id="eligibility">1. Who can use PathBuild</h2>
      <p>
        You must be at least 13 years of age to use PathBuild. If you are under
        18, you represent that your parent or legal guardian has reviewed and
        agreed to these Terms on your behalf. By using the App, you represent and
        warrant that you meet these eligibility requirements and that you are
        legally entitled to apply for and work in the roles you apply to through
        the App.
      </p>

      <h2 id="account">2. Your account</h2>
      <p>
        To use the App you create an account using Apple Sign-In, Google Sign-In,
        or email authentication. You agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information.</li>
        <li>Keep your account information accurate and up to date.</li>
        <li>
          Keep your login credentials secure and not share them with others.
        </li>
        <li>Notify us promptly of any unauthorized use of your account.</li>
        <li>Accept responsibility for all activity under your account.</li>
      </ul>

      <h2 id="service">3. What PathBuild does</h2>
      <p>
        PathBuild is an iPhone job-search and application assistant. It helps you
        find roles that fit and apply to them. To do this, the App:
      </p>
      <ul>
        <li>
          collects the information you provide — including your profile, your
          résumé or CV, your education and employment history, your contact
          details, your job preferences, and your answers to application
          questions;
        </li>
        <li>
          scores jobs from 0 to 100 for how well they fit your profile, and
          explains the reasons behind each score;
        </li>
        <li>prepares each application from the information you provide;</li>
        <li>
          for <strong>supported employer forms</strong>, fills the form on your
          behalf using automated, browser-based form-filling and submits it{" "}
          <strong>after you review and approve that specific application</strong>;
        </li>
        <li>
          for other roles, either hands you off to finish on the employer&rsquo;s
          own website (external apply) or pauses for one secure step you complete
          yourself, such as a verification or CAPTCHA;
        </li>
        <li>tracks the status of your applications; and</li>
        <li>
          verifies an application email address and monitors and collects replies
          employers send to it, bringing them back into the App and linking them
          to the relevant application.
        </li>
      </ul>
      <p>
        PathBuild uses artificial intelligence to score jobs and to prepare and
        tailor application materials. The App is a tool to help you run your job
        search. PathBuild does not guarantee employment, interviews, offers,
        salary levels, or any particular outcome.
      </p>

      <h2 id="applications">4. Applications and automated submission</h2>
      <p>
        When you ask PathBuild to prepare an application, it does so from the
        information in your account.{" "}
        <strong>
          Nothing is sent to an employer until you review exactly what will be
          shared and approve that specific application.
        </strong>
      </p>
      <ul>
        <li>
          <strong>Supported employer forms:</strong> PathBuild acts on your
          behalf, using automated, browser-based form-filling, only to submit an
          application you have reviewed and approved.
        </li>
        <li>
          <strong>External-apply roles:</strong> PathBuild prepares your
          materials, but you finish the application on the employer&rsquo;s own
          website.
        </li>
        <li>
          <strong>Secure steps:</strong> Some steps must be completed by you,
          such as a verification or CAPTCHA. PathBuild pauses and asks you to
          complete them.
        </li>
      </ul>
      <p>
        By submitting an application through PathBuild, you confirm that you are
        legally entitled to apply for the role, that the information in your
        application is accurate and your own, and that you authorize PathBuild to
        submit that specific application on your behalf. You are responsible for
        the accuracy of the information you provide and for reviewing each
        application before you approve it.
      </p>

      <h2 id="ai">5. AI and no guarantee of outcomes</h2>
      <p>
        PathBuild uses artificial intelligence to score jobs and to prepare and
        tailor your application materials. AI output can be wrong, incomplete, or
        outdated. Fit scores, prepared materials, and other AI-generated content
        are tools to help you decide — they are not:
      </p>
      <ul>
        <li>professional career counseling;</li>
        <li>financial, legal, or investment advice;</li>
        <li>a guarantee of any employment outcome; or</li>
        <li>a substitute for your own judgment.</li>
      </ul>
      <p>
        You are responsible for reviewing everything PathBuild prepares before you
        approve it.
      </p>

      <h2 id="acceptable-use">6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful or fraudulent purpose.</li>
        <li>
          Submit false, misleading, or plagiarized information in an application,
          or apply for roles you are not legally entitled to apply for or work
          in.
        </li>
        <li>
          Reverse engineer, decompile, disassemble, or otherwise attempt to
          derive the source code of any part of the App.
        </li>
        <li>
          Attempt to gain unauthorized access to our systems, servers, networks,
          or other users&apos; accounts.
        </li>
        <li>
          Use the App to harass, abuse, stalk, threaten, or harm another person.
        </li>
        <li>Transmit any viruses, malware, or other harmful code.</li>
        <li>
          Reproduce, distribute, or create derivative works from the App or its
          content without our prior written consent.
        </li>
        <li>
          Use automated means to access the App, other than the features the App
          itself provides.
        </li>
      </ul>

      <h2 id="content">7. Your content</h2>
      <p>
        You retain ownership of the content you provide to the App, including your
        profile, your résumé or CV, application documents, and your answers to
        application questions. By providing this content, you grant PathBuild a
        non-exclusive, worldwide, royalty-free license to store, process,
        transmit, and adapt it solely to provide and improve the App&rsquo;s
        services for you — including scoring jobs, preparing applications, and,
        with your approval, submitting applications to employers on your behalf.
      </p>
      <p>
        All content, features, functionality, design, trademarks, and software of
        the App itself are the property of PathBuild or its licensors. You are
        granted a limited, non-exclusive, non-transferable, revocable license to
        use the App for personal, non-commercial purposes in accordance with these
        Terms.
      </p>

      <h2 id="subscriptions">8. Subscriptions and payments</h2>
      <p>
        PathBuild offers a paid subscription, <strong>PathBuild Pro</strong>,
        which is currently available. Pro is offered at {MONTHLY_PRICE} per month
        or {ANNUAL_PRICE} per year, and each plan includes a {TRIAL_DAYS}-day free
        trial for eligible new subscribers.
      </p>
      <ul>
        <li>
          Payment is charged to your Apple ID at confirmation of purchase, or when
          a free trial ends if you have not cancelled beforehand.
        </li>
        <li>
          Subscriptions renew automatically unless you turn off auto-renew at
          least 24 hours before the end of the current period.
        </li>
        <li>
          You can manage or cancel your subscription in Settings → Apple ID →
          Subscriptions → PathBuild.
        </li>
        <li>Refunds are handled by Apple under their refund policy.</li>
      </ul>
      <p>
        See our{" "}
        <a href="/legal/subscription">Subscription Terms</a> for full details on
        pricing, trials, billing, and cancellation.
      </p>

      <h2 id="third-parties">9. Third-party services</h2>
      <p>
        The App relies on third-party services to work, including Apple, cloud
        hosting and database providers, a browser-automation provider used to
        submit supported applications on your behalf, an email-delivery provider
        used for application email, and AI processing providers. Your use of
        Apple&rsquo;s services is subject to Apple&rsquo;s terms. Our{" "}
        <a href="/legal/privacy">Privacy Policy</a> explains how these providers
        handle your information. PathBuild is not responsible for the content,
        policies, or practices of employers&rsquo; websites or other third-party
        services.
      </p>

      <h2 id="termination">10. Termination</h2>
      <p>
        We may suspend or terminate your access to the App at any time, with or
        without cause, with or without notice. You may delete your account at any
        time from within the App. Upon termination, your right to use the App will
        immediately cease.
      </p>

      <h2 id="disclaimers">11. Disclaimers</h2>
      <p>
        THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
        WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT
        NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
      </p>
      <p>
        WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR
        SECURE, THAT ANY APPLICATION WILL BE SUCCESSFULLY DELIVERED TO OR ACCEPTED
        BY AN EMPLOYER, OR THAT FIT SCORES, PREPARED MATERIALS, OR OTHER
        INFORMATION PROVIDED THROUGH THE APP ARE ACCURATE, COMPLETE, OR RELIABLE.
      </p>

      <h2 id="liability">12. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PATHBUILD AND ITS
        OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE
        FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
        PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO
        USE THE APP.
      </p>
      <p>
        IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN
        THE TWELVE (12) MONTHS PRECEDING THE DATE OF THE CLAIM, OR ONE HUNDRED
        DOLLARS ($100), WHICHEVER IS GREATER.
      </p>

      <h2 id="indemnification">13. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless PathBuild and its
        officers, directors, employees, agents, and affiliates from and against
        any claims, liabilities, damages, losses, costs, expenses, or fees
        (including reasonable attorneys&apos; fees) arising from your use of the
        App, the information you submit through it, your violation of these Terms,
        or your violation of any rights of another.
      </p>

      <h2 id="governing-law">14. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the United States, without regard
        to conflict-of-law provisions. Any disputes arising out of or relating to
        these Terms shall first be addressed through good-faith negotiation. If
        negotiation fails, disputes shall be submitted to binding arbitration in
        accordance with the rules of the American Arbitration Association.
      </p>

      <h2 id="apple">
        15. Apple App Store terms (Licensed Application End User License
        Agreement)
      </h2>
      <p>
        This section applies to your use of the App as downloaded from the Apple
        App Store:
      </p>
      <ul>
        <li>
          These Terms are between you and PathBuild only, not Apple Inc.
          (&ldquo;Apple&rdquo;). PathBuild, not Apple, is solely responsible for
          the App and its content.
        </li>
        <li>
          The license granted to you for the App is a non-transferable license to
          use the App on any Apple-branded products that you own or control, as
          permitted by the Usage Rules in the Apple Media Services Terms and
          Conditions.
        </li>
        <li>
          PathBuild, not Apple, is responsible for providing any maintenance and
          support services for the App. Apple has no obligation to furnish any
          maintenance or support services with respect to the App.
        </li>
        <li>
          In the event of any failure of the App to conform to any applicable
          warranty, you may notify Apple, and Apple will refund the purchase price
          (if any) for the App. To the maximum extent permitted by applicable law,
          Apple has no other warranty obligation with respect to the App.
        </li>
        <li>
          PathBuild, not Apple, is responsible for addressing any claims relating
          to the App or your possession and use of the App, including product
          liability claims, claims that the App fails to conform to any legal or
          regulatory requirement, and claims arising under consumer protection,
          privacy, or similar legislation.
        </li>
        <li>
          In the event of any third-party claim that the App or your possession
          and use of the App infringes that third party&apos;s intellectual
          property rights, PathBuild, not Apple, will be solely responsible for
          the investigation, defense, settlement, and discharge of any such claim.
        </li>
        <li>
          You represent and warrant that you are not located in a country subject
          to a U.S. Government embargo or designated as a &ldquo;terrorist
          supporting&rdquo; country, and that you are not listed on any U.S.
          Government list of prohibited or restricted parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these Terms
          and will have the right to enforce these Terms against you as a
          third-party beneficiary.
        </li>
      </ul>

      <h2 id="changes">16. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. When we make material
        changes, we will update the effective date at the top of this page and
        notify you through the App or via email. Your continued use of the App
        after changes take effect constitutes your acceptance of the revised
        Terms. These Terms, together with our{" "}
        <a href="/legal/privacy">Privacy Policy</a> and{" "}
        <a href="/legal/subscription">Subscription Terms</a>, form the entire
        agreement between you and PathBuild regarding your use of the App.
      </p>

      <h2 id="contact">17. Contact us</h2>
      <p>
        If you have any questions about these Terms, contact us at{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
