"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Button from "./Button";
import styles from "@/styles/css/header.module.css";

/**
 * Header — sticky top bar. Gains a border and soft shadow after the user scrolls.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="MB Technologies — home">
          <span className={styles.logoMark} aria-hidden="true" />
          MB <span className={styles.logoLight}>Technologies</span>
        </Link>

        <div className={styles.headerActions}>
          <Menu />
          <Button href="#contact" size="small" className={styles.contactButton}>
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
