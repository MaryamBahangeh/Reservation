import { PropsWithChildren, ReactElement } from "react";

import styles from "./Button.module.css";

export enum Variant {
  FILL = "fill",
  OUTLINE = "outline",
  TEXT = "text",
}

export enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BLACK = "black",
  WHITE = "white",
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  HUGE = "huge",
}

type Props = PropsWithChildren & {
  variant: Variant;
  color: Color;
  size: Size;
};

export default function Button({
  variant,
  color,
  size,
  children,
}: Props): ReactElement {
  const className = `${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`;

  return (
    <button className={className} disabled>
      {children}
    </button>
  );
}
