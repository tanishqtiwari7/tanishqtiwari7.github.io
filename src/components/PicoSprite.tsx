import type { CSSProperties } from "react";

type PicoColor = "yellow" | "blue" | "pink" | "green" | "gray";

type PicoSize = "xs" | "sm" | "md" | "lg";

type PicoSpriteProps = {
  color?: PicoColor;
  size?: PicoSize;
  className?: string;
};

const colorMap: Record<PicoColor, string> = {
  yellow: "var(--pico-yellow)",
  blue: "var(--pico-blue)",
  pink: "var(--pico-pink)",
  green: "var(--pico-green)",
  gray: "var(--pico-gray)",
};

const sizeMap: Record<PicoSize, string> = {
  xs: "pico-sprite--xs",
  sm: "pico-sprite--sm",
  md: "",
  lg: "pico-sprite--lg",
};

export default function PicoSprite({
  color = "yellow",
  size = "md",
  className,
}: PicoSpriteProps) {
  const style = {
    "--pico-color": colorMap[color],
  } as CSSProperties;

  const sizeClass = sizeMap[size];
  const classes = ["pico-sprite", sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} aria-hidden="true">
      <span className="pico-eyes">
        <span className="pico-eye" />
        <span className="pico-eye" />
      </span>
    </div>
  );
}
