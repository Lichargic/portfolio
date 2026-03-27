'use client'

import styles from './Skills.module.css'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const GROUPS = [
  {
    name: 'Web Stack',
    items: ['HTML / CSS', 'JavaScript / TypeScript', 'React / Next.js', 'Node.js'],
  },
  {
    name: 'Data & APIs',
    items: ['MongoDB', 'Supabase', 'REST APIs', 'Vercel Serverless'],
  },
  {
    name: 'Systems & Infra',
    items: ['Ubuntu / SSH', 'Pi-hole / DNS', 'Linux CLI', 'Self-hosting'],
  },
  {
    name: 'Design & Tools',
    items: ['Figma', 'Git / GitHub / Vercel', 'Android Studio', 'Unity'],
  },
]

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.skills}>
      <div className={styles.skillsInner} ref={ref} data-reveal>
        <p className={`${styles.sectionLabel} section-label`}>§ Skills</p>

        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span className={`${styles.dot} ${styles.red}`} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.yellow}`} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.green}`} aria-hidden="true" />
            <span className={styles.terminalTitle}>aman@lichargic ~ $ skills --grouped</span>
          </div>

          <div className={styles.terminalBody}>
            {GROUPS.map((group, groupIdx) => (
              <div key={group.name}>
                <p
                  className={styles.groupName}
                  style={{ '--stagger': groupIdx * 5 } as React.CSSProperties}
                >
                  {group.name}
                </p>
                {group.items.map((item, itemIdx) => (
                  <p
                    key={item}
                    className={styles.skillItem}
                    style={{ '--stagger': groupIdx * 5 + itemIdx + 1 } as React.CSSProperties}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.terminalPrompt}>
            <span className={styles.promptChar} aria-hidden="true">❯</span>
            <span>open to work · full stack · UAE / remote</span>
            <span className={styles.cursor} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
