import styles from "@/styles/common/section.module.css";

/**
 * SectionHeading — eyebrow label, h2 title and optional intro paragraph.
 * Pass `id` so the parent <section> can reference it with aria-labelledby.
 */
export default function SectionHeading({ eyebrow, title, intro, id, align = "left" }) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.headingCenter : ""}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}
