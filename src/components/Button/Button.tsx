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
  VERYSMALL = "verysmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  HUGE = "huge",
}

// type contentInfo = {
//   prefix?: string;
//   text: string;
//   suffix?: string;
// };

type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = HtmlButtonProps &
  PropsWithChildren & {
    variant: Variant;
    color: Color;
    size: Size;
    prefix?: string;
    buttonText: string;
    suffix?: string;
  };

function Button({
  variant,
  color,
  size,
  prefix,
  buttonText,
  suffix,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`}
      {...rest}
    >
      {children}
      {prefix != undefined && <img src={prefix} alt="" />}
      {buttonText} {suffix != undefined && <img src={suffix} alt="" />}
    </button>
  );
}

export default Button;
