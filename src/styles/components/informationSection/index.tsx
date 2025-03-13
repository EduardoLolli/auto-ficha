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

  h3 {
    font-size: 1.25rem; /* Equivalente a text-xl */
    font-weight: bold; /* Equivalente a font-bold */
    color: #fbbf24; /* Equivalente a text-amber-400 */
    margin-bottom: 0.75rem; /* Equivalente a mb-3 */
    border-bottom: 1px solid #4338ca; /* Equivalente a border-b border-indigo-700 */
    padding-bottom: 0.5rem; /* Equivalente a pb-2 */
  }
`;
export default StyledInformationSection;
