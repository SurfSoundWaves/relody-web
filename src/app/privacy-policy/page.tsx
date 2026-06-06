import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Relody'
}

export default function PrivacyPolicy() {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <nav className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text3 hover:text-purple transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Relody
          </Link>
        </nav>

        <header className="mb-10 pb-8 border-b border-glass-border">
          <h1 className="font-display text-[2rem] font-bold tracking-tight mb-1">
            Privacy Policy
          </h1>
          <p className="text-sm text-text3">
            Effective date: 2026-04-29 · Relody by Denys Merkulov
          </p>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-[1.7]">
          <section>
            <p className="text-text2">
              This privacy policy applies to the{' '}
              <strong className="text-text">Relody</strong> app (hereby referred
              to as "Application") for mobile devices, created by Denys Merkulov
              (hereby referred to as "Service Provider") as a free service. This
              service is intended for use "AS IS".
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Information Collection and Use
            </h2>
            <p className="text-text2 mb-3">
              The Application collects information when you download and use it.
              This information may include:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, and time spent on those pages
              </li>
              <li>The total time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p className="text-text2 mb-3">
              The Application does not gather precise information about the
              location of your mobile device.
            </p>
            <p className="text-text2 mb-3">
              The Application does not use Artificial Intelligence (AI)
              technologies to process your data or provide features.
            </p>
            <p className="text-text2 mb-3">
              The Service Provider may use the information you provided to
              contact you from time to time to provide important information,
              required notices, and marketing promotions.
            </p>
            <p className="text-text2">
              For a better experience, while using the Application, the Service
              Provider may require you to provide certain personally
              identifiable information, including but not limited to your email
              address and name. This information will be retained and used as
              described in this privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Third Party Access
            </h2>
            <p className="text-text2 mb-3">
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application. The Service Provider may share your information with
              third parties in the ways described in this privacy statement.
            </p>
            <p className="text-text2 mb-3">
              The Application utilizes third-party services that have their own
              privacy policies. Below are links to those policies:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://expo.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Expo
                </a>
              </li>
            </ul>
            <p className="text-text2 mb-3">
              The Service Provider may disclose user information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-text2">
              <li>
                As required by law, such as to comply with a subpoena or similar
                legal process
              </li>
              <li>
                When they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request
              </li>
              <li>
                With trusted service providers who work on their behalf, do not
                have an independent use of the information disclosed to them,
                and have agreed to adhere to the rules set forth in this privacy
                statement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Opt-Out Rights
            </h2>
            <p className="text-text2">
              You can stop all collection of information by the Application by
              uninstalling it. You may use the standard uninstall processes
              available on your mobile device or via the mobile application
              marketplace.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Data Retention Policy
            </h2>
            <p className="text-text2">
              The Service Provider will retain user-provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you would like your data deleted, please contact us at{' '}
              <a
                href="mailto:relody.official@gmail.com"
                className="text-purple hover:underline"
              >
                relody.official@gmail.com
              </a>{' '}
              and we will respond within a reasonable time.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Children's Privacy
            </h2>
            <p className="text-text2">
              The Application does not address anyone under the age of 13, and
              the Service Provider does not knowingly solicit data from or
              market to children under 13. If it is discovered that a child
              under 13 has provided personal information, it will be immediately
              deleted from our servers. If you are a parent or guardian and
              believe your child has provided us with personal information,
              please contact us at{' '}
              <a
                href="mailto:relody.official@gmail.com"
                className="text-purple hover:underline"
              >
                relody.official@gmail.com
              </a>{' '}
              so we can take the necessary actions.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Security
            </h2>
            <p className="text-text2">
              The Service Provider is committed to safeguarding the
              confidentiality of your information, and provides physical,
              electronic, and procedural safeguards to protect the information
              it processes and maintains.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Changes to This Policy
            </h2>
            <p className="text-text2">
              This Privacy Policy may be updated from time to time. The Service
              Provider will notify you of any changes by updating this page. You
              are advised to review this Privacy Policy regularly, as continued
              use of the Application constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Your Consent
            </h2>
            <p className="text-text2">
              By using the Application, you consent to the processing of your
              information as set forth in this Privacy Policy, as amended from
              time to time.
            </p>
          </section>

          <section>
            <div className="bg-glass border border-glass-border rounded-xl px-6 py-5">
              <h2 className="text-[1.05rem] font-semibold text-text mb-2">
                Contact Us
              </h2>
              <p className="text-text2">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact the Service Provider at{' '}
                <a
                  href="mailto:relody.official@gmail.com"
                  className="text-purple hover:underline"
                >
                  relody.official@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
