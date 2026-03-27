'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './Work.module.css'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type ProjectLink = { href: string; label: string }

type SecondaryProject = {
  index: string
  title: string
  desc: string
  stack: string[]
  link?: ProjectLink
}

const PROJECTS = {
  angie: {
    index: '01 / Ongoing',
    title: 'Angie SkyHelper',
    desc: "NPC-to-Bazaar profit tracker for Hypixel SkyBlock. Walks the full order book for each item's daily buy limit, flags thin markets, and ranks flips by real daily earnings. Toggle between insta-sell and sell order pricing. 100+ weekly visitors, no marketing.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel Serverless', 'Hypixel Bazaar API'],
    stats: [
      { value: '100+', label: 'Weekly visitors' },
      { value: '300+', label: 'Monthly' },
      { value: 'Jan 2025', label: 'First shipped' },
    ],
  },
  secondary: [
    {
      index: '02',
      title: 'Medical Center ERP',
      desc: 'A dental clinic needed a full digital system. I sat with the owner, scoped out what they actually needed, and built it from scratch: website, patient records, auth, and bookkeeping. Deployed to Vercel and handed over. Still running.',
      stack: ['Node.js', 'JavaScript', 'Vercel'],
      link: { href: 'https://github.com/Lichargic/Dar-Basmah-ERP', label: 'GitHub ↗' },
    },
    {
      index: '03',
      title: 'Home Lab / Pi-hole',
      desc: 'I wanted network-wide ad and tracker blocking without reconfiguring every device. Pi-hole runs on a dedicated Ubuntu server as the DNS resolver for the whole network. Everything gets filtered. I manage it over SSH.',
      stack: ['Ubuntu', 'Pi-hole', 'DNS', 'SSH'],
    },
    {
      index: '04',
      title: 'CoC Optimizer',
      desc: 'Android app for Clash of Clans: base layouts and army compositions. Designed the UX, built it in Android Studio, shipped it as a real APK. Start to finish, solo.',
      stack: ['Android Studio', 'Java', 'Mobile UX'],
    },
  ] as SecondaryProject[],
}

export default function Work() {
  const ref = useScrollReveal<HTMLElement>()
  const router = useRouter()

  function handleCardClick(e: React.MouseEvent) {
    if (!(e.target as HTMLElement).closest('a, button')) {
      router.push('/angie')
    }
  }

  return (
    <section id="work" className={styles.work} ref={ref} data-reveal>
      <div className={styles.workInner}>
        <p className={`${styles.sectionLabel} section-label`}>§ Work</p>

        <div className={styles.workGrid}>
          {/* Featured: Angie, entire card is clickable */}
          <div
            className={styles.featured}
            onClick={handleCardClick}
          >
            <div className={styles.featuredMain}>
              <div className={styles.projectIndex}>
                <span>{PROJECTS.angie.index}</span>
                <span className={styles.liveBadge}>● Live</span>
              </div>
              <h2 className={styles.featuredTitle}>{PROJECTS.angie.title}</h2>
              <p className={styles.projectDesc}>{PROJECTS.angie.desc}</p>
              <div className={styles.stackTags}>
                {PROJECTS.angie.stack.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a
                  href="https://angie.lichargic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  angie.lichargic.com ↗
                </a>
              </div>
              <div className={styles.statsRow}>
                {PROJECTS.angie.stats.map((s) => (
                  <div key={s.label}>
                    <span className={styles.hlValue}>{s.value}</span>
                    <span className={styles.hlLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.featuredSide}>
              <div className={styles.angiePreview}>
                <div className={styles.angieBar}>
                  <span className={styles.liveDot} />
                  <span className={styles.angieBarText}>angie.lichargic.com</span>
                </div>
                <div className={styles.angieRow}>
                  <span className={styles.angieItem}>Enchanted Sugar Cane</span>
                  <span className={`${styles.angieVal} ${styles.green}`}>+2.4M / day</span>
                </div>
                <div className={styles.angieRow}>
                  <span className={styles.angieItem}>Enchanted Cocoa Bean</span>
                  <span className={`${styles.angieVal} ${styles.green}`}>+1.8M / day</span>
                </div>
                <div className={styles.angieRow}>
                  <span className={styles.angieItem}>Enchanted Carrot</span>
                  <span className={`${styles.angieVal} ${styles.amber}`}>+940K / day</span>
                </div>
                <div className={styles.angieRow}>
                  <span className={styles.angieItem}>Enchanted Potato</span>
                  <span className={`${styles.angieVal} ${styles.amber}`}>+610K / day</span>
                </div>
              </div>
              <p className={styles.angieNote}>
                ETag/304 polling and stale-on-failure cache. Slightly old prices beat a broken page.
              </p>
            </div>

            <Link href="/angie" className={styles.expandHint}>
              Case study →
            </Link>
          </div>

          {/* Secondary row */}
          <div className={styles.secondaryRow}>
            {PROJECTS.secondary.map((p) => (
              <div key={p.index} className={styles.card}>
                <div className={styles.projectIndex}>
                  <span>{p.index}</span>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.stackTags}>
                  {p.stack.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                {p.link && (
                  <div className={styles.projectLinks}>
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {p.link.label}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
