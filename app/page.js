import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { images } from "@/data/images";
import { stats, modulePreviews, contact } from "@/data/site";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/home.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About — split layout */}
      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="about-title">
        <div className={section.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutMedia}>
              <div className={styles.aboutImageWrap}>
                <Image
                  src={images.aboutOffice}
                  alt="Open-plan MB Technologies office with desks and meeting area"
                  fill
                  sizes="(min-width: 900px) 40vw, 100vw"
                  className={styles.aboutImage}
                />
              </div>
            </div>

            <div className={styles.aboutContent}>
              <SectionHeading id="about-title" eyebrow="About MB Technologies" title="A training institute that also ships software" />
              <p className={styles.aboutText}>
                We started in 2019 with one Java batch of 14 students in Shivajinagar. Today we run two centres in Pune, a
                services team of 38 engineers, and a placement cell that knows each hiring manager by name.
              </p>
              <p className={styles.aboutText}>
                Because our trainers also work on client projects, what students learn in class is what our team used last
                month — not a syllabus written five years ago.
              </p>

              <dl className={styles.aboutFacts}>
                <div>
                  <dt className={styles.aboutFactTitle}>25 per batch</dt>
                  <dd className={styles.aboutFactText}>Maximum class size, so every student gets code reviews.</dd>
                </div>
                <div>
                  <dt className={styles.aboutFactTitle}>34 client projects</dt>
                  <dd className={styles.aboutFactText}>Delivered for MSMEs, clinics and startups across Maharashtra.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Module previews */}
      <section className={section.section} aria-labelledby="modules-title">
        <div className={section.container}>
          <SectionHeading
            id="modules-title"
            eyebrow="Explore"
            title="Everything about us, in one place"
            intro="Results, plans, courses, ways to earn, and open roles — each with its own page."
          />
          <ul className={styles.moduleGrid}>
            {modulePreviews.map((item, index) => (
              <li key={item.href} className={styles.moduleItem}>
                <Link href={item.href} className={styles.moduleLink}>
                  <span className={styles.moduleNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={styles.moduleTitle}>{item.title}</h3>
                    <p className={styles.moduleText}>{item.text}</p>
                  </div>
                  <ArrowRight className={styles.moduleArrow} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats band */}
      <section className={styles.statsBand} aria-label="MB Technologies in numbers">
        <div className={section.container}>
          <dl className={styles.statsList}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Testimonials />

      {/* Call to action */}
      <section className={styles.ctaBand} aria-labelledby="cta-title">
        <div className={section.container}>
          <div className={styles.ctaInner}>
            <div>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Not sure which course fits you?
              </h2>
              <p className={styles.ctaText}>
                Book a free 30-minute counselling call. We will tell you honestly if a course is not right for you.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button href="/learn" variant="light">
                See all courses
              </Button>
              <Button href={contact.phoneHref} variant="outlineLight">
                Call {contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
