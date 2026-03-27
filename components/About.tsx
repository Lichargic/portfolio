'use client'

import Link from 'next/link'
import styles from './About.module.css'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const PILLS = [
  { prefix: 'BSc', text: 'Creative Computing · Bath Spa University' },
  { prefix: 'UTC+4', text: '· UAE' },
  { text: 'Open to UAE local + remote' },
]

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" className={styles.about} ref={ref} data-reveal>
      <div className={styles.aboutStripe} aria-hidden="true" />
      <div className={styles.aboutContent}>
        <p className={`${styles.sectionLabel} section-label`}>§ About</p>

        <div className={styles.aboutCols}>
          <div className={styles.aboutLeft}>
            <p className={styles.aboutQuote}>
              Ship it. Use it. Notice what&apos;s wrong.<br />
              <em>Fix it.</em> Repeat.
            </p>

            <p className={styles.aboutBody}>
              Final year Creative Computing student. I build things and keep improving them once
              they&apos;re live. I started Angie in August 2024, shipped the first version in
              January 2025, and it reached 100+ weekly visitors with no marketing.
            </p>

            <p className={styles.tagline}>Never perfect, always improving.</p>
          </div>

          <div className={styles.aboutRight}>
            <div className={styles.currently}>
              <span className={styles.currentlyDot} aria-hidden="true" />
              <span className={styles.currentlyLabel}>Currently</span>
              <Link href="/angie" className={styles.currentlyValue}>Angie SkyHelper, ongoing</Link>
            </div>

            <div className={styles.pills}>
              {PILLS.map((pill, i) => (
                <span key={i} className={styles.pill}>
                  {pill.prefix && <span className={styles.pillPrefix}>{pill.prefix}</span>}
                  {pill.text}
                </span>
              ))}
            </div>

            <div className={styles.metaBlock}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Degree</span>
                <span className={styles.metaVal}>Creative Computing</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaVal}>UAE · Remote OK</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Shipped</span>
                <span className={styles.metaVal}>4 projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
