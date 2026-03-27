'use client'

import styles from './Nav.module.css'
import { useNavScroll } from '@/hooks/useNavScroll'

export default function Nav() {
  const scrolled = useNavScroll()

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <a href="/" className={styles.navLogo} aria-label="Aman Malik, home">
        <span className={styles.wordmark}>Lichargic</span>
        <span className={styles.wordmarkAccent}>.com</span>
        <span className={styles.navCursor} aria-hidden="true" />
      </a>
      <div className={styles.navLinks}>
        <a href="#work" className={styles.navLink}>Work</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="mailto:hi@lichargic.com" className={styles.navCta}>Get in touch</a>
      </div>
    </nav>
  )
}
