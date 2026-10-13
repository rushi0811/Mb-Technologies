"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, MapPin, Briefcase, IndianRupee, X } from "lucide-react";
import Button from "./Button";
import ApplicationForm from "./ApplicationForm";
import SectionHeading from "./SectionHeading";
import { jobs, jobRoles, jobLocations, jobExperience } from "@/data/jobs";
import section from "@/styles/common/section.module.css";
import styles from "@/styles/pages/careers.module.css";

const initialFilters = { query: "", role: "All", location: "All", experienceBand: "All" };

/**
 * JobBoard — searchable/filterable listings, a detail modal, and the application form.
 * Lives in one client component so "Apply" can pre-select the job in the form.
 */
export default function JobBoard() {
  const [filters, setFilters] = useState(initialFilters);
  const [activeJob, setActiveJob] = useState(null);
  const [appliedJobId, setAppliedJobId] = useState("");
  const lastTriggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const visibleJobs = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return jobs.filter(
      (job) =>
        (query === "" ||
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.summary.toLowerCase().includes(query)) &&
        (filters.role === "All" || job.role === filters.role) &&
        (filters.location === "All" || job.location === filters.location) &&
        (filters.experienceBand === "All" || job.experienceBand === filters.experienceBand)
    );
  }, [filters]);

  const updateFilter = (key) => (event) => setFilters((prev) => ({ ...prev, [key]: event.target.value }));

  const openJob = (job, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveJob(job);
  };

  const closeJob = () => {
    setActiveJob(null);
    lastTriggerRef.current?.focus();
  };

  // Pre-select the job in the form and scroll to it
  const applyFor = (jobId) => {
    setAppliedJobId(jobId);
    setActiveJob(null);
    document.getElementById("apply")?.scrollIntoView();
    // Move focus to the first field once the scroll has started
    window.setTimeout(() => document.getElementById("apply-name")?.focus({ preventScroll: true }), 0);
  };

  // Modal behaviour: lock scroll, focus close button, Escape to close, keep Tab inside
  useEffect(() => {
    if (!activeJob) return undefined;

    document.body.classList.add("scrollLocked");
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeJob();
        return;
      }
      if (event.key !== "Tab") return;

      const modal = document.getElementById("job-modal");
      const focusable = modal?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scrollLocked");
      document.removeEventListener("keydown", onKeyDown);
    };
    // closeJob only touches refs and state setters, so it is safe to omit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeJob]);

  const selectFields = [
    { key: "role", label: "Role", allLabel: "All roles", options: jobRoles },
    { key: "location", label: "Location", allLabel: "All locations", options: jobLocations },
    { key: "experienceBand", label: "Experience", allLabel: "Any experience", options: jobExperience },
  ];

  return (
    <>
      {/* Listings */}
      <section className={section.section} aria-labelledby="jobs-title">
        <div className={section.container}>
          <SectionHeading
            id="jobs-title"
            eyebrow={`${jobs.length} open roles`}
            title="Open positions"
            intro="Roles at MB Technologies and at partner companies that hire through us. Updated every Monday."
          />

          <form className={styles.searchBar} role="search" onSubmit={(event) => event.preventDefault()}>
            <div className={`${styles.field} ${styles.searchField}`}>
              <label htmlFor="job-search" className={styles.label}>
                Search
              </label>
              <div className={styles.searchWrap}>
                <Search className={styles.searchIcon} aria-hidden="true" />
                <input
                  id="job-search"
                  type="search"
                  className={`${styles.input} ${styles.searchInput}`}
                  placeholder="Job title, company or skill"
                  value={filters.query}
                  onChange={updateFilter("query")}
                />
              </div>
            </div>

            {selectFields.map((field) => (
              <div key={field.key} className={styles.field}>
                <label htmlFor={`job-${field.key}`} className={styles.label}>
                  {field.label}
                </label>
                <select
                  id={`job-${field.key}`}
                  className={styles.select}
                  value={filters[field.key]}
                  onChange={updateFilter(field.key)}
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option === "All" ? field.allLabel : option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </form>

          <p className={styles.resultsText} aria-live="polite">
            {visibleJobs.length} {visibleJobs.length === 1 ? "role" : "roles"} found
          </p>

          {visibleJobs.length === 0 ? (
            <p className={styles.empty}>
              No roles match your search. Clear a filter, or send your resume below and we will contact you when a fit opens.
            </p>
          ) : (
            <ul className={styles.jobList}>
              {visibleJobs.map((job) => (
                <li key={job.id}>
                  <article className={styles.jobCard}>
                    <div>
                      <p className={styles.jobCompany}>{job.company}</p>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <ul className={styles.jobMeta}>
                        <li className={styles.jobMetaItem}>
                          <MapPin aria-hidden="true" />
                          {job.location}
                        </li>
                        <li className={styles.jobMetaItem}>
                          <Briefcase aria-hidden="true" />
                          {job.experience} · {job.type}
                        </li>
                        <li className={styles.jobMetaItem}>
                          <IndianRupee aria-hidden="true" />
                          {job.salary}
                        </li>
                      </ul>
                    </div>
                    <div className={styles.jobActions}>
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={(event) => openJob(job, event)}
                        aria-haspopup="dialog"
                        aria-label={`View details for ${job.title}`}
                      >
                        View details
                      </Button>
                      <Button size="small" onClick={() => applyFor(job.id)} aria-label={`Apply for ${job.title}`}>
                        Apply
                      </Button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className={`${section.section} ${section.sectionAlt}`} aria-labelledby="apply-title">
        <div className={section.container}>
          <ApplicationForm selectedJobId={appliedJobId} onJobChange={setAppliedJobId} />
        </div>
      </section>

      {/* Job detail modal */}
      {activeJob && (
        <div className={styles.modalOverlay} onClick={closeJob}>
          <div
            id="job-modal"
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.jobCompany}>{activeJob.company}</p>
                <h2 id="job-modal-title">{activeJob.title}</h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                aria-label="Close job details"
                onClick={closeJob}
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <dl className={styles.modalFacts}>
              <div>
                <dt className={styles.modalFactLabel}>Location</dt>
                <dd className={styles.modalFactValue}>{activeJob.location}</dd>
              </div>
              <div>
                <dt className={styles.modalFactLabel}>Experience</dt>
                <dd className={styles.modalFactValue}>{activeJob.experience}</dd>
              </div>
              <div>
                <dt className={styles.modalFactLabel}>Compensation</dt>
                <dd className={styles.modalFactValue}>{activeJob.salary}</dd>
              </div>
              <div>
                <dt className={styles.modalFactLabel}>Posted</dt>
                <dd className={styles.modalFactValue}>{activeJob.posted}</dd>
              </div>
            </dl>

            <div className={styles.modalSection}>
              <p>{activeJob.summary}</p>
            </div>

            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>What you will do</h3>
              <ul className={styles.modalList}>
                {activeJob.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>What we are looking for</h3>
              <ul className={styles.modalList}>
                {activeJob.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Button onClick={() => applyFor(activeJob.id)}>Apply for this role</Button>
          </div>
        </div>
      )}
    </>
  );
}
