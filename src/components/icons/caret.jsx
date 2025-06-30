import React from "react";

export default function Caret({ isPositive }) {
  return (
    <svg
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={!isPositive ? "rotate-180" : ""}
    >
      <path
        className={isPositive ? "fill-green-500  " : "fill-red-500 "}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.51195 10.5833C0.900446 10.5833 0.349145 10.215 0.115132 9.65004C-0.118881 9.08504 0.0104632 8.43477 0.442868 8.00236L8.00236 0.442822C8.59276 -0.147607 9.5501 -0.147607 10.1405 0.442822L17.7 8.00236C18.1324 8.43477 18.2618 9.08504 18.0278 9.65004C17.7938 10.215 17.2425 10.5833 16.631 10.5833H1.51195Z"
      />
    </svg>
  );
}
