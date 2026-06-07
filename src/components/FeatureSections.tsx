'use client'

import { motion } from 'framer-motion'

interface Feature {
  label: string
}

interface Section {
  id: string
  icon: React.ReactNode
  title: string
  tagline: string
  blurb: string
  features: Feature[]
  accentColor: string
}

const sections: Section[] = [
  {
    id: 'people',
    icon: <PeopleIcon />,
    title: 'People',
    tagline: 'The people who matter, always within reach',
    blurb:
      'At the heart of Relody is a journal for your relationships. Each person gets their own space — their melody, their memories, their occasions.',
    accentColor: '#A78BFA',
    features: [
      { label: 'Add anyone with a name, relationship type, and avatar photo' },
      {
        label: 'Assign a signature melody — the song that captures who they are'
      },
      { label: 'Browse every song ever assigned in their melody history' },
      { label: 'Capture thoughts and moments as notes, with photos' },
      { label: 'Log song moments — memories tied to a specific track' },
      {
        label:
          'Mark the occasions that matter: birthdays, anniversaries, and more'
      },
      { label: 'A full chronological timeline of everything, in one scroll' }
    ]
  },
  {
    id: 'diary',
    icon: <DiaryIcon />,
    title: 'Diary',
    tagline: 'Your story with everyone, all in one place',
    blurb:
      'A unified feed that surfaces what matters across all your relationships — with gentle nudges when a connection needs a little warmth.',
    accentColor: '#F472B6',
    features: [
      { label: 'One unified feed of activity across all your people' },
      { label: 'Filter by notes, song moments, or see everything together' },
      {
        label:
          "Inactivity alerts when you haven't checked in with someone in 30+ days"
      },
      { label: 'Upcoming occasion reminders so you never miss a birthday' },
      { label: 'Daily connection suggestions to keep relationships alive' }
    ]
  },
  {
    id: 'search',
    icon: <SearchIcon />,
    title: 'Song Search & Discovery',
    tagline: 'Find the perfect song for every feeling',
    blurb:
      'Search millions of tracks through Spotify, preview them in-app, and recognise songs you hear in the wild — all without leaving Relody.',
    accentColor: '#C084FC',
    features: [
      { label: 'Spotify-powered search across millions of tracks' },
      { label: 'Listen to preview clips before you choose a melody' },
      { label: 'Open directly in Spotify, Apple Music, or YouTube' },
      { label: 'Built-in song recognition for songs you hear around you' }
    ]
  },
  {
    id: 'share-card',
    icon: <ShareIcon />,
    title: 'Share Card',
    tagline: 'Send more than a message — send a feeling',
    blurb:
      'Generate a beautiful, personalised music card for anyone in your list. Customise it, write something from the heart, and share it.',
    accentColor: '#E879F9',
    features: [
      { label: 'Generate a personalised music card for any person' },
      { label: 'Swipe through multiple card design variants' },
      { label: 'Choose between Square and Story (9:16) formats' },
      { label: 'Pick a colour theme to match your mood' },
      { label: 'Add a personal message line' },
      { label: 'Export and share via iOS share sheet' }
    ]
  },
  {
    id: 'friends',
    icon: <FriendsIcon />,
    title: 'Friends & Social',
    tagline: 'Find your people on Relody',
    blurb:
      'Connect with friends who are also on Relody, and link the people in your journal to their real Relody profiles.',
    accentColor: '#A78BFA',
    features: [
      { label: 'Search for other Relody users by email address' },
      { label: 'Send, accept, decline, and cancel friend requests' },
      { label: 'View your friends list with the date you connected' },
      { label: 'Link a person in your journal to a friend on Relody' }
    ]
  },
  {
    id: 'song-gifts',
    icon: <GiftIcon />,
    title: 'Song Gifts',
    tagline: 'Give the most personal gift of all — a moment in music',
    blurb:
      'Share a song moment with a friend as a gift. It lands in their inbox like a little musical letter waiting to be opened.',
    accentColor: '#F472B6',
    features: [
      { label: 'Send a song moment to a friend as a gift' },
      { label: 'Receive gifts in your inbox — waiting and received tabs' },
      { label: "View the full history of gifts you've sent" },
      { label: 'Accept a gift and save it as your own song moment' }
    ]
  },
  {
    id: 'settings',
    icon: <SettingsIcon />,
    title: 'Settings & Account',
    tagline: 'Your space, your rules',
    blurb:
      'Sign in with whatever feels natural and keep your account exactly how you want it.',
    accentColor: '#C4B5FD',
    features: [
      { label: 'Sign up or log in with email, Google, or Apple' },
      { label: 'Update your email address or password any time' },
      { label: 'Switch between Dark and Light theme' },
      { label: 'Delete your account if you ever need a fresh start' }
    ]
  }
]

export default function FeatureSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sections.map((section, idx) => (
        <motion.article
          key={section.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 2) * 0.08 }}
          whileHover={{ scale: 1.012, transition: { duration: 0.2 } }}
          className="rounded-2xl p-6 border cursor-default"
          style={{
            background: 'rgba(245,240,255,0.032)',
            borderColor: 'rgba(245,240,255,0.07)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Icon + title */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `${section.accentColor}18`,
                color: section.accentColor
              }}
            >
              {section.icon}
            </div>
            <div>
              <h2
                className="text-xl font-semibold text-text leading-snug"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                {section.title}
              </h2>
              <p
                className="text-xs mt-0.5"
                style={{ color: section.accentColor }}
              >
                {section.tagline}
              </p>
            </div>
          </div>

          {/* Blurb */}
          <p className="text-sm text-text2 leading-relaxed mb-5">
            {section.blurb}
          </p>

          {/* Feature list */}
          <ul className="space-y-2.5">
            {section.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: `${section.accentColor}22` }}
                  aria-hidden="true"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4l1.8 1.8L6.5 2.2"
                      stroke={section.accentColor}
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-text2 leading-relaxed">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}

function PeopleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function DiaryIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

function FriendsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
