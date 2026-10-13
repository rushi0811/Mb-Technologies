import PageHero from "@/components/PageHero";
import { contact } from "@/data/site";
import section from "@/styles/common/section.module.css";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for the MB Technologies website, courses and career platform.",
};

// Placeholder terms — have them reviewed by a legal professional before launch.
export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" text="Last updated: 1 October 2026" />
      <section className={section.section}>
        <div className={section.container}>
          <div className={section.prose}>
            <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
            <h2>Course information</h2>
            <p>
              Fees, batch dates and syllabi shown on this site may change. The details in your admission letter are final.
            </p>
            <h2>Job listings</h2>
            <p>
              Listings from partner companies are published in good faith. MB Technologies never charges candidates a fee
              for job applications or placements.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
