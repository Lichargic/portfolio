import styles from './Ticker.module.css'

const CATEGORIES = [
  { label: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
  { label: 'Systems', items: ['Ubuntu', 'Pi-hole', 'DNS', 'SSH', 'Self-Hosting'] },
  { label: 'Data', items: ['MongoDB', 'Supabase', 'REST APIs', 'Serverless'] },
  { label: 'Tools', items: ['Git', 'Vercel', 'Figma', 'Android Studio', 'Linux CLI'] },
]

function TickerContent() {
  return (
    <>
      {CATEGORIES.map((cat, ci) => (
        <span key={ci} className={styles.group}>
          <span className={styles.cat}>{cat.label}</span>
          <span className={styles.sep}>✦</span>
          {cat.items.map((item, ii) => (
            <span key={ii} className={styles.item}>
              {item}
              {ii < cat.items.length - 1 && (
                <span className={styles.dot}>·</span>
              )}
            </span>
          ))}
          <span className={styles.spacer} />
        </span>
      ))}
    </>
  )
}

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  )
}
