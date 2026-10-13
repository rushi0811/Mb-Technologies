import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { images } from "@/data/images";
import { earnPrograms, earnSteps, earnFaqs } from "@/data/earn";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/earn.module.css";

export const metadata = {
  title: "Earn While You Learn",
  description: "Paid internships, freelance projects and an alumni referral programme at MB Technologies, Pune.",
};

export default function EarnPage() {
  return (
    <>
      <PageHero
        title="Earn while you build experience"
        text="In 2025 we paid ₹38 lakh in stipends, project fees and referral rewards to 210 students and alumni."
        image={images.deskWork}
      />

      {/* Programmes */}
      <section className={section.section} aria-labelledby="programs-title">
        <div className={section.container}>
          <SectionHeading id="programs-title" eyebrow="Three ways to earn" title="Programmes" />
          <ul className={styles.programList}>
            {earnPrograms.map((program) => (
              <li key={program.id} className={styles.program}>
                <div>
                  <h3>{program.title}</h3>
                  <span className={styles.programAmount}>{program.amount}</span>
                  <span className={styles.programDuration}>{program.duration}</span>
                </div>
                <div>
                  <p className={styles.programText}>{program.text}</p>
                  <ul className={styles.programPoints}>
                    {program.points.map((point) => (
                      <li key={point} className={styles.programPoint}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className={`${section.section} ${section.sectionAlt}`} aria-labelledby="steps-title">
        <div className={section.container}>
          <SectionHeading id="steps-title" eyebrow="How it works" title="From classroom to first payout" />
          <ol className={styles.steps}>
            {earnSteps.map((item) => (
              <li key={item.step} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {item.step}
                </span>
                <h3 className={styles.stepTitle}>
                  <span className="srOnly">Step {item.step}: </span>
                  {item.title}
                </h3>
                <p className={styles.stepText}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={section.section} aria-labelledby="faq-title">
        <div className={section.container}>
          <div className={styles.faqWrap}>
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions students ask us" />
            <FaqAccordion items={earnFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
