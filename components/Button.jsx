import Link from "next/link";
import styles from "@/styles/common/button.module.css";

/**
 * Button — renders a Next.js <Link> when `href` is given, otherwise a <button>.
 * variant: "primary" | "secondary" | "light" | "outlineLight"
 */
export default function Button({
  href,
  variant = "primary",
  size,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    size === "small" ? styles.small : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
