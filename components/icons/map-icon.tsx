import { IconProps } from "./types";
const MapIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9053 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9053 15 16.6667C15 19.4281 17.2386 21.6667 20 21.6667Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.0001 3.33334C16.4639 3.33334 13.0725 4.7381 10.572 7.23859C8.07151 9.73907 6.66675 13.1305 6.66675 16.6667C6.66675 19.82 7.33675 21.8833 9.16675 24.1667L20.0001 36.6667L30.8334 24.1667C32.6634 21.8833 33.3334 19.82 33.3334 16.6667C33.3334 13.1305 31.9287 9.73907 29.4282 7.23859C26.9277 4.7381 23.5363 3.33334 20.0001 3.33334V3.33334Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default MapIcon;
