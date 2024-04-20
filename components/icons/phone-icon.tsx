import clsx from "clsx";
import { IconProps } from "./types";
const PhoneIcon = ({ className }: IconProps) => (
  <svg
    className={clsx(className)}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_36_956)">
      <path
        d="M27.7778 4.44446H12.2222C11.6329 4.44446 11.0676 4.67858 10.6509 5.09533C10.2341 5.51208 10 6.07731 10 6.66668V33.3333C10 33.9227 10.2341 34.4879 10.6509 34.9047C11.0676 35.3214 11.6329 35.5556 12.2222 35.5556H27.7778C28.3671 35.5556 28.9324 35.3214 29.3491 34.9047C29.7659 34.4879 30 33.9227 30 33.3333V6.66668C30 6.07731 29.7659 5.51208 29.3491 5.09533C28.9324 4.67858 28.3671 4.44446 27.7778 4.44446ZM12.2222 6.66668H27.7778V26.6667H12.2222V6.66668ZM12.2222 33.3333V28.8889H27.7778V33.3333H12.2222Z"
        fill="white"
      />
      <path d="M18.8889 30H21.1111V32.2222H18.8889V30Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_36_956">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PhoneIcon;
