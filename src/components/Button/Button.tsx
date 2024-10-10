import styles from "./Button.module.css";
import { PropsWithChildren } from "react";
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

type props = PropsWithChildren & {
  variant: Variant;
  color: Color;
  size: Size;
};
function Button({ variant, color, size, children }: props) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
