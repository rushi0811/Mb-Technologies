import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CourseCatalog from "@/components/CourseCatalog";
import { images } from "@/data/images";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/learn.module.css";

export const metadata = {
  title: "Courses",
  description: "Job-focused IT courses in Pune and online: full-stack, data analytics, cloud, DevOps and testing.",
};

const included = [
  "Batches capped at 25 students, with a dedicated mentor per batch",
  "Capstone project reviewed by a working engineer from our services team",
  "Resume review, 3 mock interviews and placement support for 12 months",
  "EMI options with 0% interest on fees above ₹30,000",
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        title="Courses built around real jobs"
        text="12 courses across development, data, cloud and testing. Weekday and weekend batches at Bund Garden Road, Wakad, or live online."
        image={images.classroom}
      />

      <section className={section.section} aria-labelledby="catalog-title">
        <div className={section.container}>
          <SectionHeading id="catalog-title" eyebrow="Course catalog" title="Find a course" />
          <CourseCatalog />
        </div>
      </section>

      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="included-title">
        <div className={section.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoContent}>
              <SectionHeading id="included-title" eyebrow="Every course" title="What is included in the fee" />
              <ul className={styles.infoList}>
                {included.map((item) => (
                  <li key={item} className={styles.infoItem}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.infoMedia}>
              <div className={styles.infoImageWrap}>
                <Image
                  src={images.laptopCode}
                  alt="Laptop showing code on screen in a classroom"
                  fill
                  sizes="(min-width: 900px) 40vw, 100vw"
                  className={styles.infoImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
