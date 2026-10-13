import PageHero from "@/components/PageHero";
import JobBoard from "@/components/JobBoard";
import { images } from "@/data/images";

export const metadata = {
  title: "Career Platform",
  description: "Open jobs and internships at MB Technologies and partner companies in Pune. Search, filter and apply online.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Career Platform"
        text="Work with us, or with one of the 48 companies that hire through us. Every listing shows the salary range up front."
        image={images.workshop}
      />
      <JobBoard />
    </>
  );
}
