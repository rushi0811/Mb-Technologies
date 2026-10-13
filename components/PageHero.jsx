import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/common/section.module.css";

/**
 * PageHero — navy banner with a darkened photo, used at the top of every module page.
 */
export default function PageHero({ title, text, image, imageAlt = "" }) {
  return (
    <section className={styles.pageHero} aria-labelledby="page-title">
      {image && (
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={styles.pageHeroImage} />
      )}
      <div className={styles.container}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 id="page-title" className={styles.pageHeroTitle}>
          {title}
        </h1>
        {text && <p className={styles.pageHeroText}>{text}</p>}
      </div>
    </section>
  );
}
