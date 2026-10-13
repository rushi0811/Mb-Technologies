"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { jobs } from "@/data/jobs";
import styles from "@/styles/pages/careers.module.css";

const MAX_FILE_MB = 2;
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx"];
const MESSAGE_LIMIT = 1000;

const emptyValues = { name: "", email: "", phone: "", message: "" };

/**
 * Validates the form and returns an object of { fieldName: errorMessage }.
 */
function validate(values, jobId, file) {
  const errors = {};

  if (!jobId) errors.position = "Choose the role you are applying for.";

  if (values.name.trim().length < 2) errors.name = "Enter your full name.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, e.g. name@example.com.";
  }

  // Indian mobile: optional +91 / 0 prefix, then 10 digits starting 6–9
  const digits = values.phone.replace(/[\s-]/g, "");
  if (!/^(\+91|0)?[6-9]\d{9}$/.test(digits)) {
    errors.phone = "Enter a 10-digit Indian mobile number.";
  }

  if (!file) {
    errors.resume = "Attach your resume.";
  } else {
    const extension = file.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      errors.resume = "Resume must be a PDF, DOC or DOCX file.";
    } else if (file.size > MAX_FILE_MB * 1024 * 1024) {
      errors.resume = `Resume must be under ${MAX_FILE_MB} MB.`;
    }
  }

  if (values.message.length > MESSAGE_LIMIT) {
    errors.message = `Keep your message under ${MESSAGE_LIMIT} characters.`;
  }

  return errors;
}

/**
 * ApplicationForm — client-side validated job application.
 * Submission is simulated; connect handleSubmit to your API or form service.
 */
export default function ApplicationForm({ selectedJobId, onJobChange }) {
  const [values, setValues] = useState(emptyValues);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFile = (event) => {
    setFile(event.target.files?.[0] ?? null);
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values, selectedJobId, file);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // TODO: send `values`, `selectedJobId` and `file` to your backend here.
    setSubmitted(true);
    setValues(emptyValues);
    setFile(null);
    formRef.current?.reset();
  };

  // Shared props for accessible error wiring
  const fieldProps = (name) => ({
    id: `apply-${name}`,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `apply-${name}-error` : undefined,
  });

  const errorMessage = (name) =>
    errors[name] ? (
      <p id={`apply-${name}-error`} className={styles.errorText}>
        {errors[name]}
      </p>
    ) : null;

  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  return (
    <div className={styles.formGrid}>
      <div className={styles.formIntro}>
        <SectionHeading id="apply-title" eyebrow="Apply" title="Send your application" />
        <ul className={styles.formIntroList}>
          <li>We reply to every application within 5 working days.</li>
          <li>Shortlisted candidates get one technical conversation and one HR call.</li>
          <li>No application fee. We never ask candidates for money.</li>
        </ul>
      </div>

      {submitted ? (
        <div className={`${styles.form} ${styles.successBox}`} role="status">
          <div className={styles.fieldFull}>
            <h3 className={styles.successTitle}>Application received</h3>
            <p>Thank you. Our hiring team will email you within 5 working days.</p>
            <Button variant="secondary" size="small" onClick={() => setSubmitted(false)}>
              Submit another application
            </Button>
          </div>
        </div>
      ) : (
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="apply-position" className={styles.label}>
              Position <span className={styles.required} aria-hidden="true">*</span>
            </label>
            <select
              {...fieldProps("position")}
              className={`${styles.select} ${errors.position ? styles.inputError : ""}`}
              value={selectedJobId}
              onChange={(event) => {
                onJobChange(event.target.value);
                if (errors.position) setErrors((prev) => ({ ...prev, position: undefined }));
              }}
              required
            >
              <option value="">Select a role</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} — {job.company}
                </option>
              ))}
            </select>
            {selectedJob && !errors.position && <p className={styles.hint}>{selectedJob.location}</p>}
            {errorMessage("position")}
          </div>

          <div className={styles.field}>
            <label htmlFor="apply-name" className={styles.label}>
              Full name <span className={styles.required} aria-hidden="true">*</span>
            </label>
            <input
              {...fieldProps("name")}
              type="text"
              autoComplete="name"
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              value={values.name}
              onChange={handleChange}
              required
            />
            {errorMessage("name")}
          </div>

          <div className={styles.field}>
            <label htmlFor="apply-email" className={styles.label}>
              Email <span className={styles.required} aria-hidden="true">*</span>
            </label>
            <input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              value={values.email}
              onChange={handleChange}
              required
            />
            {errorMessage("email")}
          </div>

          <div className={styles.field}>
            <label htmlFor="apply-phone" className={styles.label}>
              Mobile number <span className={styles.required} aria-hidden="true">*</span>
            </label>
            <input
              {...fieldProps("phone")}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="98XXXXXXXX"
              className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
              value={values.phone}
              onChange={handleChange}
              required
            />
            {errorMessage("phone")}
          </div>

          <div className={styles.field}>
            <label htmlFor="apply-resume" className={styles.label}>
              Resume <span className={styles.required} aria-hidden="true">*</span>
            </label>
            <input
              {...fieldProps("resume")}
              type="file"
              accept=".pdf,.doc,.docx"
              className={styles.fileInput}
              onChange={handleFile}
              aria-describedby={errors.resume ? "apply-resume-error" : "apply-resume-hint"}
              required
            />
            {errors.resume ? (
              errorMessage("resume")
            ) : (
              <p id="apply-resume-hint" className={styles.hint}>
                PDF, DOC or DOCX, up to {MAX_FILE_MB} MB.
              </p>
            )}
          </div>

          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="apply-message" className={styles.label}>
              Message <span className={styles.hint}>(optional)</span>
            </label>
            <textarea
              {...fieldProps("message")}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Tell us about a project you are proud of, or why this role fits you."
              value={values.message}
              onChange={handleChange}
              maxLength={MESSAGE_LIMIT + 50}
            />
            <p className={styles.hint}>
              {values.message.length}/{MESSAGE_LIMIT} characters
            </p>
            {errorMessage("message")}
          </div>

          <div className={styles.fieldFull}>
            <Button type="submit">Submit application</Button>
          </div>
        </form>
      )}
    </div>
  );
}
