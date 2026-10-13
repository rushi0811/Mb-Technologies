import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import { images } from "@/data/images";
import { successHighlights } from "@/data/success";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/success.module.css";

export const metadata = {
  title: "Success Stories",
  description: "Before-and-after case studies from MB Technologies students and software clients in Pune.",
};

export default function SuccessPage() {
  return (
    <>
      <PageHero
        title="Success stories"
        text="Real outcomes from students who changed careers and businesses that replaced spreadsheets with working software."
        image={images.presentation}
      />

      <section className={section.section} aria-labelledby="cases-title">
        <div className={section.container}>
          <ul className={styles.highlights}>
            {successHighlights.map((item) => (
              <li key={item.label} className={styles.highlight}>
                <span className={styles.highlightValue}>{item.value}</span>
                <span className={styles.highlightLabel}>{item.label}</span>
              </li>
            ))}
          </ul>

          <SectionHeading
            id="cases-title"
            eyebrow="Case studies"
            title="Where they started, where they are now"
            intro="Names and numbers shared with permission. Placement figures are audited each year by our placement cell."
          />
          <CaseStudies />
        </div>
      </section>

      <Testimonials />
    </>
  );
}
