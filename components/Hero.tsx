'use client'

import Image from 'next/image'
import styles from './Hero.module.css'
import { useCountUp } from '@/hooks/useCountUp'

export default function Hero() {
  const projectsCount = useCountUp(4)

  return (
    <section className={styles.hero}>
      {/* Left column */}
      <div className={styles.heroContent}>
        <div className={styles.blobWrapper} aria-hidden="true">
          <div className={`${styles.blob} ${styles.blob1}`} />
          <div className={`${styles.blob} ${styles.blob2}`} />
          <div className={`${styles.blob} ${styles.blob3}`} />
        </div>

        <div className={styles.heroTop}>
          <div className={styles.statusBadge}>Available for hire</div>
        </div>

        <div className={styles.heroMid}>
          <p className={styles.heroRole}>Full Stack · Creative Computing · UAE / Remote</p>
          <h1 className={styles.heroName}>
            <span className={styles.nameOutline}>Aman</span>
            <span className={styles.nameSolid}>Malik</span>
          </h1>
          <p className={styles.heroDesc}>
            I build things, ship them, and improve them in production.
          </p>
          <div className={styles.heroCtas}>
            <a href="#work" className={styles.ctaPrimary}>View Work</a>
            <a
              href="https://github.com/Lichargic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaGhost}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className={styles.heroBot}>
          <div className={styles.heroBotLinks}>
            <a href="mailto:hi@lichargic.com" className={styles.heroBotLink}>hi@lichargic.com</a>
            <a
              href="https://github.com/Lichargic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBotLink}
            >
              github.com/Lichargic
            </a>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className={styles.heroVisual}>
        <Image
          src="/images/graduation.png"
          alt="Aman Malik"
          fill
          priority
          className={styles.heroPhoto}
        />

        <div className={styles.heroStats}>
          <div className={styles.statCol}>
            <span className={styles.statN}>100+</span>
            <span className={styles.statL}>weekly visitors</span>
          </div>
          <div className={styles.statCol}>
            <span className={styles.statN}>300+</span>
            <span className={styles.statL}>monthly</span>
          </div>
          <div className={styles.statCol}>
            <span
              className={styles.statN}
              ref={projectsCount.ref as React.RefObject<HTMLSpanElement>}
            >
              {projectsCount.count}
            </span>
            <span className={styles.statL}>projects shipped</span>
          </div>
          <div className={styles.statCol}>
            <span className={styles.statN}>3+</span>
            <span className={styles.statL}>yrs building</span>
          </div>
        </div>
      </div>
    </section>
  )
}
