import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Relody'
}

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-text3">
            Effective date: 2026-06-07 · Relody by Denys Merkulov
          </p>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-[1.7]">
          <section>
            <p className="text-text2 mb-3">
              These terms and conditions apply to the{' '}
              <strong className="text-text">Relody </strong> app (hereby
              referred to as &quot;Application&quot;) for mobile devices,
              created by Denys Merkulov (hereby referred to as &quot;Service
              Provider&quot;) as a free service.
            </p>
            <p className="text-text2">
              By downloading or using the Application, you automatically agree
              to the following terms. Please read and understand these terms
              thoroughly before using the Application.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Eligibility
            </h2>
            <p className="text-text2">
              You must be at least 13 years old to use the Application. By
              creating an account, you confirm that you are 13 years of age or
              older. If you are under 18, you confirm that you have obtained
              parental or guardian consent. The Service Provider does not
              knowingly allow children under 13 to use the Application.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Intellectual Property
            </h2>
            <p className="text-text2">
              Unauthorized copying or modification of the Application, any part
              of the Application, or our trademarks is strictly prohibited. Any
              attempts to extract the source code of the Application, translate
              it into other languages, or create derivative versions are not
              permitted. All trademarks, copyrights, database rights, and other
              intellectual property rights related to the Application remain the
              property of the Service Provider.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              User Content
            </h2>
            <p className="text-text2 mb-3">
              You retain ownership of all content you create within the
              Application, including notes, images, song associations, and
              messages (&quot;User Content&quot;). By submitting User Content,
              you grant the Service Provider a limited, non-exclusive,
              worldwide, royalty-free licence to store, process, and display
              your User Content solely as necessary to provide and improve the
              Application.
            </p>
            <p className="text-text2 mb-3">
              You are solely responsible for your User Content. You represent
              and warrant that:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                You have all rights necessary to submit the content and grant
                the above licence
              </li>
              <li>
                Your content does not infringe the intellectual property,
                privacy, or other rights of any third party
              </li>
              <li>
                Your content does not contain unlawful, abusive, defamatory, or
                otherwise objectionable material
              </li>
            </ul>
            <p className="text-text2">
              The Service Provider reserves the right to remove User Content
              that violates these terms.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Prohibited Uses
            </h2>
            <p className="text-text2 mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 text-text2">
              <li>
                Use the Application for any unlawful purpose or in violation of
                any applicable law or regulation
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the
                Application or its related systems
              </li>
              <li>
                Reverse engineer, decompile, or disassemble the Application
              </li>
              <li>
                Harvest or collect information about other users without their
                consent
              </li>
              <li>
                Use the Application to send unsolicited communications or spam
              </li>
              <li>Share your account credentials with any third party</li>
              <li>
                Impersonate any person or entity, or misrepresent your
                affiliation with any person or entity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Third-Party Services &amp; Music Content
            </h2>
            <p className="text-text2 mb-3">
              The Application integrates with the following third-party
              services, each governed by their own terms and conditions:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-2 text-text2">
              <li>
                <a
                  href="https://www.google.com/analytics/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://expo.io/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Expo
                </a>
              </li>
              <li>
                <a
                  href="https://www.spotify.com/legal/end-user-agreement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Spotify
                </a>{' '}
                — music search and optional account integration
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/uk/terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Apple / iTunes
                </a>{' '}
                — audio preview lookup via the iTunes Search API
              </li>
              <li>
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  YouTube
                </a>{' '}
                — optional link to full song when no preview is available
              </li>
            </ul>
            <p className="text-text2 mb-3">
              Music metadata is sourced via Spotify. Audio previews may be
              provided by Spotify or iTunes/Apple Music. When a preview is
              unavailable, the Application may direct you to Spotify, Apple
              Music, or YouTube to listen to the full song. All music content
              accessed through the Application is for personal, non-commercial
              listening only. You may not download, reproduce, or redistribute
              any such content.
            </p>
            <p className="text-text2">
              The Service Provider accepts no liability for any loss, direct or
              indirect, resulting from reliance on third-party functionality
              within the Application.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Your Responsibilities
            </h2>
            <p className="text-text2 mb-3">
              The Application stores and processes personal data you provide in
              order to deliver the Service. It is your responsibility to
              maintain the security of your phone and access to the Application.
            </p>
            <p className="text-text2 mb-3">
              The Service Provider strongly advises against jailbreaking or
              rooting your phone. Such actions could expose your device to
              malware, compromise security features, and may result in the
              Application not functioning correctly or at all.
            </p>
            <p className="text-text2 mb-3">
              Some functions of the Application require an active internet
              connection (Wi-Fi or mobile data). The Service Provider cannot be
              held responsible if the Application does not function at full
              capacity due to lack of connectivity or exhausted data allowances.
            </p>
            <p className="text-text2">
              If you use the Application outside of a Wi-Fi area, your mobile
              provider&apos;s terms still apply. You may incur data charges,
              including roaming charges if you use the Application outside your
              home territory. By using the Application, you accept
              responsibility for any such charges.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Disclaimer of Warranties
            </h2>
            <p className="text-text2">
              The Application is provided &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; without warranties of any kind, either express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement. The Service Provider does not warrant that the
              Application will be uninterrupted, error-free, or free of viruses
              or other harmful components. Your use of the Application is at
              your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Limitation of Liability
            </h2>
            <p className="text-text2 mb-3">
              To the fullest extent permitted by applicable law, the Service
              Provider shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of data, loss of profits, or loss of goodwill,
              arising out of or in connection with your use of the Application.
            </p>
            <p className="text-text2">
              In no event shall the Service Provider&apos;s total liability to
              you for all claims arising out of or related to the Application
              exceed the amount you paid to the Service Provider in the twelve
              months preceding the claim, or £0 if no amounts have been paid.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Indemnification
            </h2>
            <p className="text-text2">
              You agree to indemnify, defend, and hold harmless the Service
              Provider from and against any claims, liabilities, damages,
              losses, and expenses (including reasonable legal fees) arising out
              of or in any way connected with your access to or use of the
              Application, your User Content, or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Service Modifications and Charges
            </h2>
            <p className="text-text2">
              The Service Provider reserves the right to modify the Application
              or introduce charges for services at any time. Any charges will be
              clearly communicated to you in advance before taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Updates and Termination
            </h2>
            <p className="text-text2 mb-3">
              The Service Provider may update the Application from time to time.
              You may need to download updates to continue using the
              Application. The Service Provider does not guarantee that it will
              always update the Application to remain compatible with your
              particular operating system version.
            </p>
            <p className="text-text2 mb-3">
              The Service Provider may suspend or terminate your access to the
              Application if you violate these Terms. Where reasonably
              practicable, the Service Provider will provide notice before
              termination. In cases of serious breach, access may be terminated
              immediately without notice.
            </p>
            <p className="text-text2">
              Upon termination for any reason: (a) the rights and licences
              granted to you in these Terms will end; and (b) you must cease
              using the Application and, if necessary, delete it from your
              device. Your rights under applicable data protection law regarding
              your personal data are not affected by termination.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Governing Law &amp; Dispute Resolution
            </h2>
            <p className="text-text2 mb-3">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of England and Wales, without regard to
              its conflict of law provisions. If you are a consumer in the
              EU/EEA, you also benefit from any mandatory protective provisions
              of the law of your country of residence that cannot be derogated
              from by agreement.
            </p>
            <p className="text-text2">
              In the event of a dispute, the parties agree to first attempt
              resolution by contacting the Service Provider at{' '}
              <a
                href="mailto:relody.official@gmail.com"
                className="text-purple hover:underline"
              >
                relody.official@gmail.com
              </a>
              . If the dispute cannot be resolved informally within 30 days,
              either party may seek resolution through the courts of England and
              Wales, subject to any mandatory local consumer protection laws
              that apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Changes to These Terms
            </h2>
            <p className="text-text2">
              The Service Provider may update these Terms and Conditions from
              time to time. For material changes, you will be notified within
              the Application or by email at least 14 days before the change
              takes effect. Continued use of the Application after the effective
              date constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <div className="bg-glass border border-glass-border rounded-xl px-6 py-5">
              <h2 className="text-[1.05rem] font-semibold text-text mb-2">
                Contact Us
              </h2>
              <p className="text-text2">
                If you have any questions or suggestions about these Terms and
                Conditions, please contact the Service Provider at{' '}
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
