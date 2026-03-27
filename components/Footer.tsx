import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Aman Malik · {new Date().getFullYear()}</span>
      <span className={styles.available}>
        <span className={styles.dot} aria-hidden="true" />
        Available for work
      </span>
      <span className={styles.built}>Next.js · Vercel</span>
    </footer>
  )
}
