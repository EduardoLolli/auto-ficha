import React from "react";

const LeftArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M18 12L6 12M6 12L11 17M6 12L11 7"
      stroke="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LeftArrow;
