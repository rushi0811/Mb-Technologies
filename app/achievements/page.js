import Image from "next/image";
import { Award, BadgeCheck, Star, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import { images } from "@/data/images";
import { achievements, gallery } from "@/data/achievements";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/achievements.module.css";

export const metadata = {
  title: "Achievements",
  description: "Awards, certifications and recognitions earned by MB Technologies, Pune.",
};

// One small icon per category
const categoryIcons = {
  Award: Award,
  Certification: BadgeCheck,
  Recognition: Star,
  Press: Newspaper,
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        title="Achievements"
        text="Certifications we earned through audits, awards voted by the industry, and a few moments we are proud of."
        image={images.boardroom}
      />

      <section className={section.section} aria-labelledby="awards-title">
        <div className={section.container}>
          <SectionHeading id="awards-title" eyebrow="Recognition" title="Awards & certifications" />
          <ul className={styles.awardGrid}>
            {achievements.map((item) => {
              const Icon = categoryIcons[item.category];
              return (
                <li key={item.id}>
                  <Card>
                    <div className={styles.awardMeta}>
                      <Icon className={styles.awardIcon} aria-hidden="true" />
                      <span className={styles.awardYear}>{item.year}</span>
                    </div>
                    <span className={styles.awardCategory}>{item.category}</span>
                    <h3 className={styles.awardTitle}>{item.title}</h3>
                    <p className={styles.awardIssuer}>{item.issuer}</p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="gallery-title">
        <div className={section.container}>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="Moments from the last two years" />
          <ul className={styles.gallery}>
            {gallery.map((photo, index) => (
              <li key={photo.caption} className={index === 0 ? styles.galleryFeatured : undefined}>
                <figure className={styles.galleryItem}>
                  <div className={styles.galleryImageWrap}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 900px) 66vw, 100vw" : "(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"}
                      className={styles.galleryImage}
                    />
                  </div>
                  <figcaption className={styles.galleryCaption}>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
