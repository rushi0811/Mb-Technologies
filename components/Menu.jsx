"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import Button from "./Button";
import { navItems } from "@/data/site";
import styles from "@/styles/css/menu.module.css";

/**
 * Menu — horizontal nav on desktop; hamburger + slide-in panel on mobile.
 * Highlights the active page using the current pathname.
 */
export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Close the panel whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock page scroll, move focus into the panel, and close on Escape
  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add("scrollLocked");
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("scrollLocked");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav className={styles.desktopNav} aria-label="Main">
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        ref={toggleRef}
        type="button"
        className={styles.menuToggle}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon aria-hidden="true" />
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className={styles.panelHeader}>
          <span>Menu</span>
          <button ref={closeRef} type="button" className={styles.menuToggle} aria-label="Close menu" onClick={closeMenu}>
            <X aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className={styles.panelList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.panelLink} ${isActive(item.href) ? styles.panelLinkActive : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.panelFooter}>
          <Button href="#contact" fullWidth onClick={() => setIsOpen(false)}>
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}
