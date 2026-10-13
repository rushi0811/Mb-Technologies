"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { caseStudies } from "@/data/success";
import styles from "@/styles/pages/success.module.css";

const filters = ["All", "Student", "Client"];

/**
 * CaseStudies — filterable before/after case study cards (Success page).
 */
export default function CaseStudies() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? caseStudies : caseStudies.filter((item) => item.type === active);

  return (
    <>
      <div className={styles.filterBar} role="group" aria-label="Filter case studies">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`${styles.filterButton} ${active === filter ? styles.filterButtonActive : ""}`}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter === "All" ? "All stories" : `${filter} stories`}
          </button>
        ))}
      </div>

      <ul className={styles.caseGrid}>
        {visible.map((item) => (
          <li key={item.id}>
            <Card as="article">
              <div className={styles.caseHeader}>
                <Image src={item.photo} alt="" width={48} height={48} className={styles.casePhoto} />
                <div>
                  <span className={styles.caseType}>{item.type}</span>
                  <h3 className={styles.caseTitle}>{item.title}</h3>
                  <p className={styles.caseName}>{item.name}</p>
                </div>
              </div>

              <div className={styles.compare}>
                <p className={`${styles.compareBox} ${styles.compareBefore}`}>
                  <span className={styles.compareLabel}>Before</span>
                  {item.before}
                </p>
                <p className={`${styles.compareBox} ${styles.compareAfter}`}>
                  <span className={styles.compareLabel}>After</span>
                  {item.after}
                </p>
              </div>

              <p className={styles.caseDetail}>{item.detail}</p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
