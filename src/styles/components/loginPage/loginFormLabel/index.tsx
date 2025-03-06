import styled from "styled-components";

const StyledLoginFormLabel = styled("div")`
  label {
    display: block;
    color: #fde68a; /* Cor âmbar clara */
    font-size: 0.75rem; /* 12px */
    font-weight: 500;
    margin: 4px 0;
    margin-left: 0.25rem; /* 4px */
    @media (min-width: 640px) {
      margin: 8px 0;
      font-size: 0.875rem; /* 14px, aplicado em telas sm (mínimo 640px) */
    }
  }

  input {
    display: block;
    width: 100%;
    padding-left: 2.5rem; /* 10px */
    padding-right: 0.75rem; /* 3px */
    padding-top: 0.625rem; /* 2.5 */
    padding-bottom: 0.625rem; /* 2.5 */
    border: 1px solid #475569; /* Slate-600 */
    border-radius: 18px;
    background-color: rgba(30, 41, 59, 0.8); /* Slate-800/80 */
    color: #bfdbfe; /* Blue-100 */
    font-size: 0.875rem; /* 14px */
    transition: all 200ms ease-in-out;
  }

  input::placeholder {
    color: #94a3b8; /* Slate-400 */
  }

  input:focus {
    outline: none;
    border-color: rgba(245, 158, 11, 0.5); /* Amber-500/50 */
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.5); /* Amber-500/50 */
  }

  .svg-div {
    position: absolute;
    inset-block: 0; /* Equivalente a inset-y-0 */
    left: 0;
    padding-left: 0.75rem; /* 3px */
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  svg {
    width: 1rem; /* 4 */
    height: 1rem; /* 4 */
    color: rgba(245, 158, 11, 0.7); /* Amber-500/70 */
  }

  @media (min-width: 640px) {
    input {
      padding-top: 0.75rem; /* 3 */
      padding-bottom: 0.75rem; /* 3 */
    }

    svg {
      width: 1.25rem; /* 5 */
      height: 1.25rem; /* 5 */
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export default StyledLoginFormLabel;
