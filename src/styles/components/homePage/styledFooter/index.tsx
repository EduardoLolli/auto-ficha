import styled from "styled-components";

const StyledFooter = styled("footer")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem; /* 4 * 0.25rem (padrão do Tailwind) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  backdrop-filter: blur(4px);

  .footer-container {
    display: flex;
    gap: 1rem;
  }

  .footer-container button {
    color: #d1d5db; /* text-gray-300 */
    transition: color 0.2s ease-in-out;
    position: relative;
}

.footer-container button:hover {
    color: #f59e0b; /* hover:text-amber-400 */
}

.footer-container button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px; /* h-0.5 */
    width: 0;
    background-color: #f59e0b; /* after:bg-amber-400 */
    transition: width 0.3s ease-in-out;
}

.footer-container button:hover::after {
    width: 100%;
}
`;

export default StyledFooter;
