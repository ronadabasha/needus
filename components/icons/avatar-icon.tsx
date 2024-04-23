import { IconProps } from "./types";

const AvatarIcon = ({ className, strokeColor }: IconProps) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
      stroke="black"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8.83325C9.38071 8.83325 10.5 7.71396 10.5 6.33325C10.5 4.95254 9.38071 3.83325 8 3.83325C6.61929 3.83325 5.5 4.95254 5.5 6.33325C5.5 7.71396 6.61929 8.83325 8 8.83325Z"
      stroke="black"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.14001 13.7074C3.34627 13.0209 3.76832 12.4192 4.34355 11.9916C4.91878 11.5639 5.61655 11.333 6.33335 11.3333H9.66668C10.3844 11.333 11.083 11.5644 11.6587 11.9931C12.2343 12.4217 12.6562 13.0247 12.8617 13.7124"
      stroke="black"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AvatarIcon;
