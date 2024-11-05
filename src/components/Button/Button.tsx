import styles from "./Button.module.css";
import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { IconProps } from "iconsax-react";

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
    prefix?: ReactElement<IconProps>;
    buttonText: string;
    suffix?: ReactElement<IconProps>;
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
      {prefix != undefined && prefix}
      {buttonText}
      {suffix != undefined && suffix}
    </button>
  );
}

export default Button;
