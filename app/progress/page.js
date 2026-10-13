import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/images";
import { timeline, milestones } from "@/data/progress";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/progress.module.css";

export const metadata = {
  title: "Our Progress",
  description: "How MB Technologies grew from a two-room lab in 2019 to two Pune centres and a 60-person team.",
};

export default function ProgressPage() {
  return (
    <>
      <PageHero
        title="Our progress"
        text="Seven years, one year at a time. What we built, where we stumbled, and what we are working on right now."
        image={images.teamMeeting}
      />

      {/* Growth timeline */}
      <section className={section.section} aria-labelledby="timeline-title">
        <div className={section.container}>
          <SectionHeading id="timeline-title" eyebrow="2019 – 2025" title="How we got here" />
          <ol className={styles.timeline}>
            {timeline.map((item, index) => (
              <li
                key={item.year}
                className={`${styles.timelineItem} ${index === timeline.length - 1 ? styles.timelineItemLatest : ""}`}
              >
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Current milestones */}
      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="milestones-title">
        <div className={section.container}>
          <div className={styles.milestoneGrid}>
            <div className={styles.milestoneIntro}>
              <SectionHeading
                id="milestones-title"
                eyebrow="This year"
                title="Current milestones"
                intro="Targets for FY 2026–27, tracked by our operations team."
              />
              <p className={styles.milestoneUpdated}>Last updated: 1 October 2026</p>
            </div>

            <ul className={styles.milestoneList}>
              {milestones.map((item, index) => (
                <li key={item.label}>
                  <div className={styles.milestoneRow}>
                    <span id={`milestone-${index}`}>{item.label}</span>
                    <span className={styles.milestonePercent}>{item.percent}%</span>
                  </div>
                  <progress
                    className={styles.progressBar}
                    value={item.percent}
                    max={100}
                    aria-labelledby={`milestone-${index}`}
                  >
                    {item.percent}%
                  </progress>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
