import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { images } from "@/data/images";
import { partners } from "@/data/site";
import styles from "@/styles/css/hero.module.css";

/**
 * Hero — home page opener: headline, two CTAs, team photo, partner trust strip.
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowDot} aria-hidden="true" />
            November batches open · Bund Garden Rd &amp; Wakad
          </p>

          <h1 id="hero-title" className={styles.heroTitle}>
            Pune&apos;s training ground for <span className={styles.heroHighlight}>working</span> software engineers
          </h1>

          <p className={styles.heroText}>
            Small batches, live client projects and 48 hiring partners — so you leave with a job, not just a certificate.
          </p>

          <div className={styles.heroActions}>
            <Button href="/learn">
              Explore Programs <ArrowRight aria-hidden="true" />
            </Button>
            <Button href="/careers" variant="secondary">
              Join Our Team
            </Button>
          </div>

          <p className={styles.heroMeta}>Next counselling session: Saturday, 11 am · Free, no sign-up fee</p>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.heroImageWrap}>
            <Image
              src={images.heroTeam}
              alt="Developers working together on laptops around a shared table"
              fill
              priority
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeValue}>860</span>
            <span className={styles.heroBadgeLabel}>students placed since our first batch in 2019</span>
          </div>
        </div>
      </div>

      <div className={styles.trust}>
        <div className={styles.trustInner}>
          <p className={styles.trustLabel}>Our alumni work at</p>
          <ul className={styles.trustList}>
            {partners.map((name) => (
              <li key={name} className={styles.trustItem}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
