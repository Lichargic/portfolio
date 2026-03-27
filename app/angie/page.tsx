// app/angie/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Angie SkyHelper · Aman Malik',
  description: 'Case study: Angie SkyHelper. A live NPC-to-Bazaar profit tool for Hypixel SkyBlock with walk-the-book profit engine, ETag polling, and three-layer caching.',
}

const STACK = ['HTML', 'CSS', 'JavaScript', 'Vercel Serverless Functions', 'Hypixel Bazaar API']

export default function AngiePage() {
  return (
    <div className={styles.page}>
      <nav className={styles.topNav} aria-label="Case study navigation">
        <Link href="/" className={styles.backLink}>
          ← Aman Malik
        </Link>
        <span className={styles.navTitle}>Angie SkyHelper</span>
        <div className={styles.navLinks}>
          <a
            href="https://angie.lichargic.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLiveLink}
          >
            <span className={styles.liveDot} aria-hidden="true" />
            Live
          </a>
        </div>
      </nav>

      <div className={styles.heroStrip}>
        <div className={styles.heroStripInner}>
          <p className={`section-label ${styles.caseStudyLabel}`}>§ Case Study</p>
          <h1 className={styles.title}>Angie SkyHelper</h1>
          <p className={styles.subtitle}>
            NPC-to-Bazaar profit tracker for Hypixel SkyBlock. Real order book depth, live data, and filters that show only the flips worth doing.
          </p>
          <div className={styles.headerLinks}>
            <a
              href="https://angie.lichargic.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkPrimary}
            >
              angie.lichargic.com ↗
            </a>
            <a
              href="https://github.com/Lichargic/Angie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkSecondary}
            >
              github.com/Lichargic/Angie ↗
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100+</span>
              <span className={styles.statLabel}>verified weekly visitors</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>300+</span>
              <span className={styles.statLabel}>monthly visitors</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Aug 2024</span>
              <span className={styles.statLabel}>first commit</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>organic traffic</span>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        {/* The Problem */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ The Problem</p>
          <h2 className={styles.sectionTitle}>The gap no other tool filled</h2>
          <p className={styles.body}>
            Hypixel SkyBlock has a player-driven economy. NPC vendors sell certain items at fixed prices, sometimes well below what players will pay on the Bazaar. The opportunity is real: buy from an NPC, sell on the Bazaar. But finding which items are worth trading meant checking each one manually, pulling order book data, and doing the maths, then repeating all of it five minutes later because prices move constantly.
          </p>
          <p className={styles.body}>
            Other tools covered player-to-player Bazaar flips. None I could find specifically ranked fixed NPC prices against live Bazaar order books. Most players either did not know this arbitrage existed or gave up on tracking it manually.
          </p>
        </section>

        <hr className={styles.divider} />

        {/* What Angie Does */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ The Solution</p>
          <h2 className={styles.sectionTitle}>Live data, ranked by profit</h2>
          <p className={styles.body}>
            Angie pulls live data from the Hypixel Bazaar API, walks the order book to calculate real fill profit for every eligible NPC item, filters out thin markets, and returns a list ranked by daily profit.
          </p>
          <p className={styles.body}>
            Toggle between insta-sell and sell order pricing to see recalculated profits instantly. Thin market warnings flag items where the visible price is held up by a small buy wall that may not last. Volume and minimum daily profit filters cut out noise so only actionable flips appear. Item data loads from a local cache on first visit, so there is no waiting.
          </p>
          <p className={styles.body}>
            No account, no setup. Open the site and start flipping.
          </p>

          {/* Mini preview */}
          <div className={styles.previewBlock}>
            <div className={styles.previewBar}>
              <span className={styles.previewDot} aria-hidden="true" />
              <span className={styles.previewUrl}>angie.lichargic.com</span>
            </div>
            <div className={styles.previewRow}>
              <span className={styles.previewItem}>Enchanted Sugar Cane</span>
              <span className={`${styles.previewVal} ${styles.green}`}>+2.4M / day</span>
            </div>
            <div className={styles.previewRow}>
              <span className={styles.previewItem}>Enchanted Cocoa Bean</span>
              <span className={`${styles.previewVal} ${styles.green}`}>+1.8M / day</span>
            </div>
            <div className={styles.previewRow}>
              <span className={styles.previewItem}>Enchanted Carrot</span>
              <span className={`${styles.previewVal} ${styles.amber}`}>+940K / day</span>
            </div>
            <div className={styles.previewRow}>
              <span className={styles.previewItem}>Enchanted Potato</span>
              <span className={`${styles.previewVal} ${styles.amber}`}>+610K / day</span>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* How It Works */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ How It Works</p>
          <h2 className={styles.sectionTitle}>Technical decisions</h2>

          <div className={styles.technicalBlock}>
            <h3 className={styles.techTitle}>Walk-the-book profit engine</h3>
            <p className={styles.body}>
              The Bazaar API returns order books: lists of buy and sell orders at different prices and quantities. A naive calculation subtracts the NPC price from the top-of-book sell price, but that price often represents a small quantity. Fill a realistic order and you move deeper into the book, where the price gets worse.
            </p>
            <p className={styles.body}>
              Angie walks the order book instead, computing a weighted average fill price across the player&apos;s full daily buy limit. A return of zero from this function means no market depth, not zero profit. Those two cases need separate filters, and getting that wrong passes bad data through. Markets that fall apart under realistic volume are flagged as thin and filtered before they reach the list.
            </p>
          </div>

          <div className={styles.technicalBlock}>
            <h3 className={styles.techTitle}>ETag/304 conditional polling</h3>
            <p className={styles.body}>
              The client polls every 30 seconds. Hypixel&apos;s Bazaar data updates every 20 seconds at most, so without caching, most polls fetch identical data.
            </p>
            <p className={styles.body}>
              The server tracks the last fetch timestamp as an ETag. The client sends <code>If-None-Match</code> on every poll. If the server cache is still valid, it returns HTTP 304 with no body. The client skips the update. Full payload only travels when data actually changes. With CDN caching (<code>s-maxage=20, stale-while-revalidate=10</code>) on top, Hypixel gets hit at most once every 20 seconds no matter how many clients are polling.
            </p>
          </div>

          <div className={styles.technicalBlock}>
            <h3 className={styles.techTitle}>Stale-on-failure with timeout guard</h3>
            <p className={styles.body}>
              The upstream fetch to Hypixel runs with a 5-second abort timeout. Without it, a slow Hypixel response can eat the serverless function&apos;s entire execution budget, and the stale fallback never gets a chance to run. The 5-second limit leaves enough headroom for the catch block to respond before the function times out.
            </p>
            <p className={styles.body}>
              If Hypixel is down but the server has cached data, it serves the stale response with an <code>X-Cache-Stale</code> header rather than a 502. Slightly old prices are better than a broken page. A cold-start failure with no cache at all is the only case that returns an error.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ Timeline</p>
          <div className={styles.timeline}>
            <div className={styles.timelineRow}>
              <span className={styles.timelineDate}>Aug 17, 2024</span>
              <span className={styles.timelineEvent}>Initial commit</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineDate}>Jan 14, 2025</span>
              <span className={styles.timelineEvent}>First working version deployed to Vercel</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineDate}>Jan / Feb 2025</span>
              <span className={styles.timelineEvent}>Insta Sell / Sell Order toggle, volume filters, analytics</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineDate}>Jan 2026</span>
              <span className={styles.timelineEvent}>Backend proxy, ETag caching, settings, moved to angie.lichargic.com</span>
            </div>
            <div className={styles.timelineRow}>
              <span className={styles.timelineDate}>Mar 2026</span>
              <span className={styles.timelineEvent}>V2 shipped: full refactor, accessibility, Kiara shard items</span>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ Stack</p>
          <div className={styles.tags}>
            {STACK.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* What I Learned */}
        <section className={styles.section}>
          <p className={`section-label ${styles.sectionLabel}`}>§ What I Learned</p>
          <blockquote className={styles.learnedQuote}>
            Shipping something real teaches you things you cannot learn any other way.
          </blockquote>
          <p className={styles.body}>
            The ETag/304 pattern came from noticing that the client was fetching identical Bazaar payloads every 30 seconds. The stale fallback came from Hypixel going down and users seeing a broken page. The 5-second abort timeout came from watching a slow upstream response eat the entire serverless budget. Every one of those decisions came from something going wrong in production, not from planning.
          </p>
          <p className={styles.body}>
            Build it. Ship it. Watch it break. Fix it. That loop is how this project got from a basic profit calculator to a tool with real users, real edge cases, and a codebase with actual lessons written into it.
          </p>
        </section>

        <hr className={styles.divider} />

        <Link href="/" className={styles.backLinkBottom}>
          ← Back to portfolio
        </Link>
      </main>
    </div>
  )
}
