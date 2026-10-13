import styles from "@/styles/common/card.module.css";

/**
 * Card — generic bordered surface.
 * Set `interactive` when the card contains a link so it gets a hover state.
 */
export default function Card({ as: Tag = "div", interactive = false, flat = false, className = "", children, ...rest }) {
  const classes = [styles.card, interactive ? styles.interactive : "", flat ? styles.flat : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
