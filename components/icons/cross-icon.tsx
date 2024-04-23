import clsx from "clsx";
import { IconProps } from "./types";

const CrossIcon = ({ className }: IconProps) => (
  <svg
    className={clsx(className)}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.0752 15.9246L15.9244 1.07538"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <path
      d="M1.0752 1.07538L15.9244 15.9246"
      stroke="#ffffff"
      strokeWidth="2"
    />
  </svg>
);

export default CrossIcon;
