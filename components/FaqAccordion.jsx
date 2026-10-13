"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "@/styles/pages/earn.module.css";

/**
 * FaqAccordion — one answer open at a time; uses aria-expanded / aria-controls.
 */
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;
        const questionId = `faq-question-${index}`;

        return (
          <li key={item.question} className={styles.faqItem}>
            <h3>
              <button
                id={questionId}
                type="button"
                className={styles.faqQuestion}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <Plus className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`} aria-hidden="true" />
              </button>
            </h3>
            <div id={answerId} role="region" aria-labelledby={questionId} hidden={!isOpen}>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
