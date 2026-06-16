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
            Effective date: 2026-06-08 · Relody by Denys Merkulov
          </p>
        </header>

        <div className="space-y-8 text-[0.95rem] leading-[1.7]">
          <section>
            <p className="text-text2">
              This privacy policy applies to the{' '}
              <strong className="text-text">Relody </strong> app (hereby
              referred to as &quot;Application&quot;) for mobile devices,
              created by Denys Merkulov (hereby referred to as &quot;Service
              Provider&quot;) as a free service. This service is intended for
              use &quot;AS IS&quot;. The Service Provider is registered with the
              Information Commissioner&apos;s Office (ICO) under registration
              number <strong className="text-text">ZC169182</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Information We Collect
            </h2>
            <p className="text-text2 mb-3">
              The Application collects the following categories of information:
            </p>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Account &amp; Identity
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>Email address and display name (provided during sign-up)</li>
              <li>Profile photo (if uploaded)</li>
              <li>
                Authentication credentials managed by Firebase Authentication,
                including Google or Apple sign-in tokens where applicable
              </li>
            </ul>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Content You Create
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                Names, relationship types, and profile photos of people you add
                to the Application
              </li>
              <li>
                Occasions and dates you associate with people (e.g. birthdays,
                anniversaries)
              </li>
              <li>
                Notes — text content and images you attach to notes about people
              </li>
              <li>
                Song moments — songs and descriptions you record as memories
              </li>
              <li>
                Song metadata associated with people: song name, artist, album,
                album artwork URL, and a link to the song on Spotify
              </li>
              <li>Gift messages you send to friends within the Application</li>
              <li>
                Content reports you submit — if you report a gift message as
                inappropriate, we store the report reason alongside the
                identifiers of the reporter and the reported content, used
                solely for moderation purposes
              </li>
              <li>
                Activity metadata — a brief summary of your most recent note or
                song moment per person (e.g. a content snippet and timestamp),
                stored to display relationship recency indicators within the
                Application
              </li>
            </ul>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Social &amp; Friends
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>Friend connections you establish with other Relody users</li>
              <li>
                A snapshot of your display name and profile photo stored
                alongside friendship records at the time a friendship is created
              </li>
            </ul>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Spotify Integration (optional)
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                Your Spotify user ID, stored to enable playlist creation on your
                behalf
              </li>
              <li>
                Spotify OAuth access and refresh tokens, stored securely on your
                device only and never transmitted to our servers
              </li>
              <li>
                Song search queries you enter, sent to our backend which queries
                the Spotify API
              </li>
            </ul>
            <p className="text-text2">
              Song metadata (titles, artists, album artwork, and Spotify track
              links) is stored as part of your song moments and melodies.
              Disconnecting Spotify removes your account credentials but does
              not delete your saved song content.
            </p>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Audio — Song Recognition (optional)
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                When you use the song recognition feature, a short audio
                recording is captured from your microphone and sent to AudD (a
                third-party song recognition service) to identify the song. This
                audio is not stored by the Service Provider after the request
                completes.
              </li>
            </ul>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Push Notifications
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                Your device push notification token, stored to deliver
                connection reminders and occasion alerts
              </li>
            </ul>

            <h3 className="text-[0.95rem] font-semibold text-text mb-1.5 mt-4">
              Usage &amp; Device
            </h3>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>Your device&apos;s IP address</li>
              <li>Mobile operating system type and version</li>
            </ul>

            <p className="text-text2 mt-3">
              The Application does not collect precise geolocation data.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-text2">
              <li>To create and maintain your account</li>
              <li>
                To provide the core features of the Application (relationship
                journaling, song associations, sharing)
              </li>
              <li>
                To send push notifications for connection reminders and upcoming
                occasions
              </li>
              <li>
                To enable music features: song search and playlist export via
                Spotify; audio preview lookup via iTunes
              </li>
              <li>To recognise songs via the microphone feature</li>
              <li>
                To communicate important service updates or respond to support
                requests
              </li>
              <li>To improve and maintain the Application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-text2 mb-3">
              Where the General Data Protection Regulation (GDPR) applies, the
              Service Provider processes your personal data under the following
              legal bases:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-text2">
              <li>
                <strong className="text-text">Performance of a contract</strong>{' '}
                — account data, content you create, notifications, and core app
                functionality
              </li>
              <li>
                <strong className="text-text">Legitimate interest</strong> —
                usage analytics to improve the Application, security monitoring
              </li>
              <li>
                <strong className="text-text">Consent</strong> — Spotify account
                connection (you can disconnect at any time in Settings); push
                notification permission (you can revoke at any time in your
                device settings)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              California Residents (CCPA)
            </h2>
            <p className="text-text2 mb-3">
              If you are a California resident, you have the following rights
              under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                <strong className="text-text">Right to Know</strong> — request
                disclosure of the categories and specific pieces of personal
                information we have collected about you, the sources, the
                purposes, and the third parties with whom it is shared
              </li>
              <li>
                <strong className="text-text">Right to Delete</strong> — request
                deletion of personal information we have collected from you,
                subject to certain exceptions
              </li>
              <li>
                <strong className="text-text">Right to Opt-Out</strong> — the
                Service Provider does not sell your personal information to third
                parties and has not done so in the preceding 12 months
              </li>
              <li>
                <strong className="text-text">Right to Non-Discrimination</strong>{' '}
                — you will not receive discriminatory treatment for exercising
                your CCPA rights
              </li>
            </ul>
            <p className="text-text2">
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:relody.official@gmail.com"
                className="text-purple hover:underline"
              >
                relody.official@gmail.com
              </a>
              . We will respond within 45 days of a verifiable request.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Third-Party Services
            </h2>
            <p className="text-text2 mb-3">
              The Application uses the following third-party services. Each
              operates under its own privacy policy:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-text2">
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Firebase / Google Cloud
                </a>{' '}
                — authentication, database, file storage, and cloud functions
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Google
                </a>{' '}
                — optional Google sign-in
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Apple
                </a>{' '}
                — optional Sign in with Apple
              </li>
              <li>
                <a
                  href="https://www.spotify.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Spotify
                </a>{' '}
                — music search and playlist creation; track search queries are
                sent to our backend which calls the Spotify API using
                application-level credentials (no personal Spotify account
                required for search)
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Apple / iTunes
                </a>{' '}
                — the iTunes Search API is queried automatically to fetch audio
                preview URLs when you save a song; track name and artist are
                sent as a search query (no account required)
              </li>
              <li>
                <a
                  href="https://audd.io/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  AudD
                </a>{' '}
                — song recognition from audio (only when you use the recognition
                feature)
              </li>
              <li>
                <a
                  href="https://expo.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  Expo
                </a>{' '}
                — push notification delivery and over-the-air app updates
              </li>
            </ul>
            <p className="text-text2 mb-3">
              The Service Provider may also disclose your information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-text2">
              <li>As required by law or to comply with legal process</li>
              <li>
                To protect the rights, property, or safety of the Service
                Provider, users, or others
              </li>
              <li>
                To other Relody users only to the extent necessary to provide
                social features you initiate (e.g. friend requests, gifts)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Data Retention
            </h2>
            <p className="text-text2 mb-3">
              Your data is retained for as long as your account is active. When
              you delete your account through the Application (Settings → Delete
              Account), the Service Provider permanently deletes:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>Your account and profile data</li>
              <li>
                All people, notes, song moments, and occasions you created
              </li>
              <li>All images you uploaded</li>
              <li>Your friendship connections and sent/received gifts</li>
              <li>Your push notification token</li>
            </ul>
            <p className="text-text2">
              Note: gift messages you sent to other users, and friendship
              snapshots stored in other users&apos; accounts, may be retained in
              those accounts after you delete yours. Profile snapshots captured
              at the time of friending may persist in a friend&apos;s data even
              if you later update your profile.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Your Rights
            </h2>
            <p className="text-text2 mb-3">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1 text-text2">
              <li>
                <strong className="text-text">Access</strong> — request a copy
                of the data we hold about you
              </li>
              <li>
                <strong className="text-text">Rectification</strong> — correct
                inaccurate data (most content can be edited directly in the app)
              </li>
              <li>
                <strong className="text-text">Deletion</strong> — delete your
                account and all associated data via Settings → Delete Account,
                or by contacting us
              </li>
              <li>
                <strong className="text-text">Data portability</strong> —
                download a copy of all your data (profile, people, notes, song
                moments, and more) in JSON format directly from the app via
                Settings → Download My Data. You may also request a copy by
                contacting us at{' '}
                <a
                  href="mailto:relody.official@gmail.com"
                  className="text-purple hover:underline"
                >
                  relody.official@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-text">Withdraw consent</strong> —
                disconnect Spotify in Settings at any time; revoke push
                notification permission in your device settings at any time
              </li>
              <li>
                <strong className="text-text">Opt out</strong> — you can stop
                all data collection by uninstalling the Application
              </li>
            </ul>
            <p className="text-text2">
              UK residents may lodge a complaint with the Information
              Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple hover:underline"
              >
                ico.org.uk
              </a>
              . EU/EEA residents may lodge a complaint with their local data
              protection supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Children&apos;s Privacy
            </h2>
            <p className="text-text2">
              The Application is not directed to children under the age of 13,
              and the Service Provider does not knowingly collect personal
              information from children under 13. If you are a parent or
              guardian and believe your child has provided personal information,
              please contact us at{' '}
              <a
                href="mailto:relody.official@gmail.com"
                className="text-purple hover:underline"
              >
                relody.official@gmail.com
              </a>{' '}
              and any such data will be promptly deleted.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Security
            </h2>
            <p className="text-text2">
              The Service Provider implements reasonable technical and
              organisational measures to protect your data, including encrypted
              data transmission (HTTPS), Firebase security rules restricting
              data access to account owners, and secure on-device storage for
              sensitive credentials such as Spotify tokens. No method of
              transmission or storage is 100% secure, and the Service Provider
              cannot guarantee absolute security.
            </p>
            <p className="text-text2 mt-3">
              The Application uses Apple App Attest and Google Play Integrity
              (via Firebase App Check) to verify that requests to our backend
              come from a genuine, unmodified copy of the Application. This
              may share device-level integrity signals with Apple or Google;
              the Service Provider does not receive or store any additional
              personal data as part of this process.
            </p>
          </section>

          <section>
            <h2 className="text-[1.05rem] font-semibold text-text mb-2.5 pb-2 border-b border-glass-border">
              Changes to This Policy
            </h2>
            <p className="text-text2">
              This Privacy Policy may be updated from time to time. For material
              changes, the Service Provider will provide notice within the
              Application or by email at least 14 days before the change takes
              effect. Continued use of the Application after the effective date
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <div className="bg-glass border border-glass-border rounded-xl px-6 py-5">
              <h2 className="text-[1.05rem] font-semibold text-text mb-2">
                Contact Us
              </h2>
              <p className="text-text2">
                For questions about this Privacy Policy, data requests, or to
                exercise your rights, contact the Service Provider at{' '}
                <a
                  href="mailto:relody.official@gmail.com"
                  className="text-purple hover:underline"
                >
                  relody.official@gmail.com
                </a>
                . We aim to respond within 30 days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
