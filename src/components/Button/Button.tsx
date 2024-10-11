import styles from "./Button.module.css";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

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

type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = HtmlButtonProps &
  PropsWithChildren & {
    variant: Variant;
    color: Color;
    size: Size;
  };

function Button({ variant, color, size, children, ...rest }: Props) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
