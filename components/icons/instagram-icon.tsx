import clsx from "clsx";
import { IconProps } from "./types";

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_36_917)">
      <path
        d="M20 5H10C7.23858 5 5 7.23858 5 10V20C5 22.7614 7.23858 25 10 25H20C22.7614 25 25 22.7614 25 20V10C25 7.23858 22.7614 5 20 5Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.625 9.375V9.376"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_36_917">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default InstagramIcon;
