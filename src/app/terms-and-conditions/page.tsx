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
            Effective date: 2026-04-29 · Relody by Denys Merkulov
          </p>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-[1.7]">
          <section>
            <p className="text-text2 mb-3">
              These terms and conditions apply to the{' '}
              <strong className="text-text">Relody</strong> app (hereby referred
              to as "Application") for mobile devices, created by Denys Merkulov
              (hereby referred to as "Service Provider") as a free service.
            </p>
            <p className="text-text2">
              By downloading or using the Application, you automatically agree
              to the following terms. Please read and understand these terms
              thoroughly before using the Application.
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
              Service Modifications and Charges
            </h2>
            <p className="text-text2">
              The Service Provider reserves the right to modify the Application
              or charge for their services at any time and for any reason. Any
              charges for the Application or its services will be clearly
              communicated to you in advance.
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
            <p className="text-text2 mb-3">
              If you use the application outside of a Wi-Fi area, your mobile
              provider's terms still apply. You may incur data charges,
              including roaming charges if you use the application outside your
              home territory. By using the application, you accept
              responsibility for any such charges. If you are not the bill payer
              for the device, it is assumed you have obtained permission from
              the bill payer.
            </p>
            <p className="text-text2">
              It is your responsibility to keep your device charged. If your
              device runs out of battery and you are unable to access the
              Service, the Service Provider cannot be held responsible.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Third-Party Services
            </h2>
            <p className="text-text2 mb-3">
              The Application utilizes third-party services that have their own
              Terms and Conditions. Below are links to those terms:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
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
            </ul>
            <p className="text-text2">
              While the Service Provider strives to keep the Application updated
              and accurate, they rely on third parties to provide certain
              information. The Service Provider accepts no liability for any
              loss, direct or indirect, resulting from reliance on third-party
              functionality within the Application.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Updates and Termination
            </h2>
            <p className="text-text2 mb-3">
              The Service Provider may update the Application from time to time.
              The Application is available as per the requirements of your
              operating system, which may change. You will need to download
              updates to continue using the Application. The Service Provider
              does not guarantee that it will always update the Application to
              remain relevant or compatible with your particular operating
              system version. By continuing to use the Application, you agree to
              accept updates when offered.
            </p>
            <p className="text-text2">
              The Service Provider may also cease providing the Application and
              terminate its use at any time without prior notice. Upon
              termination: (a) the rights and licenses granted to you in these
              terms will end; and (b) you must cease using the Application and,
              if necessary, delete it from your device.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Changes to These Terms
            </h2>
            <p className="text-text2">
              The Service Provider may periodically update these Terms and
              Conditions. You are advised to review this page regularly for any
              changes. Changes are effective immediately upon being posted to
              this page.
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
