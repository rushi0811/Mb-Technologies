import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/images";
import { vision, mission, initiatives, roadmap } from "@/data/future";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/future.module.css";

export const metadata = {
  title: "Our Future",
  description: "MB Technologies vision, mission, upcoming initiatives and 2026–2030 roadmap.",
};

const CURRENT_YEAR = "2026";

export default function FuturePage() {
  return (
    <>
      <PageHero
        title="Where we are headed"
        text="Our plan for the next five years: more centres outside Pune, our own software products, and wider access to tech careers."
        image={images.discussion}
      />

      {/* Vision & mission */}
      <section className={section.section} aria-label="Vision and mission">
        <div className={section.container}>
          <div className={styles.statementGrid}>
            <div className={styles.statement}>
              <h2 className={styles.statementLabel}>Vision</h2>
              <p className={styles.statementText}>{vision}</p>
            </div>
            <div className={styles.statement}>
              <h2 className={styles.statementLabel}>Mission</h2>
              <p className={styles.statementText}>{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming initiatives */}
      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="initiatives-title">
        <div className={section.container}>
          <div className={styles.initiativeGrid}>
            <div className={styles.initiativeMedia}>
              <div className={styles.initiativeImageWrap}>
                <Image
                  src={images.students}
                  alt="Group of students standing together outside a college building"
                  fill
                  sizes="(min-width: 900px) 40vw, 100vw"
                  className={styles.initiativeImage}
                />
              </div>
            </div>
            <div className={styles.initiativeContent}>
              <SectionHeading
                id="initiatives-title"
                eyebrow="Coming up"
                title="Upcoming initiatives"
                intro="Four programmes we are funding from our own revenue over the next three years."
              />
              <ul className={styles.initiativeList}>
                {initiatives.map((item) => (
                  <li key={item.title} className={styles.initiativeItem}>
                    <h3 className={styles.initiativeTitle}>{item.title}</h3>
                    <p className={styles.initiativeText}>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className={section.section} aria-labelledby="roadmap-title">
        <div className={section.container}>
          <SectionHeading id="roadmap-title" eyebrow="2026 – 2030" title="Roadmap" />
          <ol className={styles.roadmap}>
            {roadmap.map((entry) => (
              <li
                key={entry.year}
                className={`${styles.roadmapYear} ${entry.year === CURRENT_YEAR ? styles.roadmapYearCurrent : ""}`}
              >
                <div className={styles.roadmapLabel}>
                  <h3>{entry.year}</h3>
                  {entry.year === CURRENT_YEAR && <span className={styles.roadmapNow}>In progress</span>}
                </div>
                <ul className={styles.roadmapItems}>
                  {entry.items.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
