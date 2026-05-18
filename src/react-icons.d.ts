import type { ComponentType, SVGProps } from "react";

declare module "react-icons" {
  export type IconType = ComponentType<SVGProps<SVGSVGElement>>;
}

declare module "react-icons/fa6" {
  import type { IconType } from "react-icons";

  export const FaGithub: IconType;
  export const FaDiscord: IconType;
  export const FaLinkedinIn: IconType;
  export const FaInstagram: IconType;
}
