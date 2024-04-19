import clsx from "clsx";
import { IconProps } from "./types";

const Chevron = ({ className }: IconProps) => (
  <svg
    className={clsx(className)}
    width="10"
    height="5"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5.94975 5.94975L10.8995 1"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

export default Chevron;
