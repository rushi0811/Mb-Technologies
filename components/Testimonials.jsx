"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/testimonials";
import styles from "@/styles/css/testimonials.module.css";

/**
 * Testimonials — swipeable slider with prev/next buttons on mobile,
 * a static 3-column grid on desktop.
 */
export default function Testimonials() {
  const trackRef = useRef(null);

  // Scroll by one card width in the given direction (-1 or 1)
  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const cardWidth = track.firstElementChild.getBoundingClientRect().width;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <SectionHeading
            id="testimonials-title"
            eyebrow="In their words"
            title="Students and clients, a year later"
          />
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.controlButton}
              aria-label="Previous testimonial"
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className={styles.controlButton}
              aria-label="Next testimonial"
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul ref={trackRef} className={styles.track} tabIndex={0} aria-label="Testimonials, scroll horizontally on mobile">
          {testimonials.map((item) => (
            <li key={item.id} className={styles.testimonialCard}>
              <blockquote className={styles.quote}>
                <p>{item.quote}</p>
              </blockquote>
              <div className={styles.person}>
                <Image src={item.photo} alt={`Portrait of ${item.name}`} width={48} height={48} className={styles.avatar} />
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
