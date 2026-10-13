"use client";

import { useMemo, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { contact } from "@/data/site";
import { courses, courseCategories, courseLevels, courseDurations } from "@/data/courses";
import styles from "@/styles/pages/learn.module.css";

const initialFilters = { category: "All", durationBand: "All", level: "All" };

/**
 * CourseCatalog — course cards filtered by category, duration and level.
 */
export default function CourseCatalog() {
  const [filters, setFilters] = useState(initialFilters);

  const visibleCourses = useMemo(
    () =>
      courses.filter(
        (course) =>
          (filters.category === "All" || course.category === filters.category) &&
          (filters.durationBand === "All" || course.durationBand === filters.durationBand) &&
          (filters.level === "All" || course.level === filters.level)
      ),
    [filters]
  );

  const updateFilter = (key) => (event) => setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  const isFiltered = Object.keys(initialFilters).some((key) => filters[key] !== "All");

  // Filter dropdowns rendered from one config
  const filterFields = [
    { key: "category", label: "Category", allLabel: "All categories", options: courseCategories },
    { key: "durationBand", label: "Duration", allLabel: "Any duration", options: courseDurations },
    { key: "level", label: "Level", allLabel: "All levels", options: courseLevels },
  ];

  return (
    <>
      <form className={styles.filters} aria-label="Filter courses" onSubmit={(event) => event.preventDefault()}>
        {filterFields.map((field) => (
          <div key={field.key} className={styles.field}>
            <label htmlFor={`filter-${field.key}`} className={styles.label}>
              {field.label}
            </label>
            <select
              id={`filter-${field.key}`}
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

      <div className={styles.resultsBar}>
        <p aria-live="polite">
          Showing {visibleCourses.length} of {courses.length} courses
        </p>
        {isFiltered && (
          <button type="button" className={styles.resetButton} onClick={() => setFilters(initialFilters)}>
            Clear filters
          </button>
        )}
      </div>

      {visibleCourses.length === 0 ? (
        <p className={styles.empty}>No courses match these filters. Try a different level or duration.</p>
      ) : (
        <ul className={styles.courseGrid}>
          {visibleCourses.map((course) => (
            <li key={course.id}>
              <Card as="article" interactive>
                <div className={styles.courseTop}>
                  <span className={styles.tag}>{course.category}</span>
                  <span className={`${styles.tag} ${styles.tagLevel}`}>{course.level}</span>
                </div>

                <h3 className={styles.courseTitle}>{course.title}</h3>

                <dl className={styles.courseFacts}>
                  <div>
                    <dt className={styles.courseFactLabel}>Duration</dt>
                    <dd className={styles.courseFactValue}>{course.duration}</dd>
                  </div>
                  <div>
                    <dt className={styles.courseFactLabel}>Mode</dt>
                    <dd className={styles.courseFactValue}>{course.mode}</dd>
                  </div>
                  <div>
                    <dt className={styles.courseFactLabel}>Next batch</dt>
                    <dd className={styles.courseFactValue}>{course.nextBatch}</dd>
                  </div>
                </dl>

                <div className={styles.courseFooter}>
                  <span className={styles.courseFee}>{course.fee}</span>
                  <Button
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`Course enquiry: ${course.title}`)}`}
                    size="small"
                    aria-label={`Enquire about ${course.title}`}
                  >
                    Enquire
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
