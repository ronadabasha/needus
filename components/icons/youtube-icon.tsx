import clsx from "clsx";
import { IconProps } from "./types";

const YoutubeIcon = ({ className }: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_36_913)">
      <path
        d="M21.25 6.25H8.75C5.98858 6.25 3.75 8.48858 3.75 11.25V18.75C3.75 21.5114 5.98858 23.75 8.75 23.75H21.25C24.0114 23.75 26.25 21.5114 26.25 18.75V11.25C26.25 8.48858 24.0114 6.25 21.25 6.25Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11.25L18.75 15L12.5 18.75V11.25Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_36_913">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default YoutubeIcon;
