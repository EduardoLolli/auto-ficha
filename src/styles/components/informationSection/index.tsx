import styled from "styled-components";

const StyledInformationSection = styled("div")`
  background-color: rgba(
    49,
    46,
    129,
    0.6
  ); /* Equivalente a bg-indigo-900 com opacidade 60% */
  border-radius: 25px; /* Equivalente a rounded-lg */
  padding: 1.5rem; /* Equivalente a p-6 */
  border: 1px solid #4338ca; /* Equivalente a border border-indigo-700 */
  height: 100%; /* Equivalente a h-full */
  transition: border-color 0.2s ease-in-out; /* Equivalente a transition-colors duration-300 */
  &:hover {
    border-color: #f59e0b; /* Equivalente a hover:border-amber-500 */
  }
`;
export default StyledInformationSection;
