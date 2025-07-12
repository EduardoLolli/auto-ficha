import styled from "styled-components";
interface HPValue {
  lifePercentage: number;
}

const StyledHealthBar = styled("div")<HPValue>`
  background: linear-gradient(to right, #b91c1c, #ef4444);
  height: 0.75rem; /* equivalent to h-3 */
  border-radius: 9999px; /* equivalent to rounded-full */
  width: ${({ lifePercentage }) => `${lifePercentage > 100 ? 100 : lifePercentage}%`};
  margin-left: 0.25rem; /* Equivalente a ml-1 */
`;

export default StyledHealthBar;
