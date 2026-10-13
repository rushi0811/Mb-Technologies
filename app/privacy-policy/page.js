import PageHero from "@/components/PageHero";
import { contact } from "@/data/site";
import section from "@/styles/common/section.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "How MB Technologies collects, uses and protects your personal information.",
};

// Placeholder policy text — have it reviewed by a legal professional before launch.
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" text="Last updated: 1 October 2026" />
      <section className={section.section}>
        <div className={section.container}>
          <div className={section.prose}>
            <p>
              MB Technologies Pvt. Ltd. collects the information you give us through enquiry and application forms — your
              name, email, phone number, resume and message — only to respond to you and assess your application.
            </p>
            <h2>How we use your information</h2>
            <p>
              We use it to reply to course enquiries, process job and internship applications, and, with your consent,
              share your profile with hiring partners. We do not sell personal data.
            </p>
            <h2>How long we keep it</h2>
            <p>Application data is kept for 12 months and then deleted unless you ask us to keep it longer.</p>
            <h2>Your rights</h2>
            <p>
              You can ask to see, correct or delete your data at any time by writing to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
