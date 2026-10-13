import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { navItems, contact, socialLinks } from "@/data/site";
import styles from "@/styles/css/footer.module.css";

// Map icon keys in data/site.js to lucide components
const socialIcons = { linkedin: Linkedin, instagram: Instagram, youtube: Youtube, facebook: Facebook };

const programLinks = [
  { label: "Full-Stack Java", href: "/learn" },
  { label: "MERN with Next.js", href: "/learn" },
  { label: "Data Analytics", href: "/learn" },
  { label: "AWS & DevOps", href: "/learn" },
  { label: "Automation Testing", href: "/learn" },
  { label: "Paid Internships", href: "/earn" },
];

/**
 * Footer — about blurb, quick links, programs, contact details and legal bar.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.columnAbout}`}>
            <Link href="/" className={styles.logo}>
              MB Technologies
            </Link>
            <p className={styles.about}>
              IT training and software services from Pune since 2019. We teach in small batches, build software for
              Maharashtra businesses, and place our students with 48 partner companies.
            </p>
            <ul className={styles.social}>
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={styles.socialLink}
                      aria-label={`MB Technologies on ${item.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className={styles.column} aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className={styles.columnTitle}>
              Quick Links
            </h2>
            <ul className={styles.linkList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-labelledby="footer-programs">
            <h2 id="footer-programs" className={styles.columnTitle}>
              Programs
            </h2>
            <ul className={styles.linkList}>
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div id="contact" className={`${styles.column} ${styles.columnContact}`}>
            <h2 className={styles.columnTitle}>Contact</h2>
            <address>
              <ul className={styles.linkList}>
                <li className={styles.contactItem}>
                  <MapPin aria-hidden="true" />
                  <span>
                    {contact.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <Phone aria-hidden="true" />
                  <a href={contact.phoneHref} className={styles.footerLink}>
                    {contact.phone}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <Mail aria-hidden="true" />
                  <a href={`mailto:${contact.email}`} className={styles.footerLink}>
                    {contact.email}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <Clock aria-hidden="true" />
                  <span>{contact.hours}</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 MB Technologies Pvt. Ltd. All rights reserved.</p>
          <ul className={styles.legalLinks}>
            <li>
              <Link href="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={styles.footerLink}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
