import styled from "styled-components";

interface AtributesContainerProps {
  modValue: number;
}

const AtributesContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Equivalente a grid-cols-2 */
  gap: 0.75rem; /* Equivalente a gap-3 */

  .atribute {
    background-color: rgba(
      55,
      48,
      163,
      0.5
    ); /* Equivalente a bg-indigo-800 com 50% de opacidade */
    border-radius: 10px; /* Equivalente a rounded */
    padding: 0.5rem; /* Equivalente a p-2 */
    text-align: center; /* Equivalente a text-center */
    border: 1px solid #4f46e5; /* Equivalente a border border-indigo-600 */
    transition: all 0.3s ease-in-out; /* Equivalente a transition-all */
  }

  .atribute:hover {
    border-color: #f59e0b; /* Equivalente a hover:border-amber-500 */
    box-shadow: inset 0 0 10px rgba(245, 158, 11, 0.2); /* Equivalente a hover:shadow-amber-500/20 hover:shadow-inner */
  }

  .atribute-name {
    font-size: 0.75rem; /* Equivalente a text-xs */
    color: #d1d5db; /* Equivalente a text-gray-300 */
    text-transform: uppercase; /* Equivalente a uppercase */
    letter-spacing: 0.05em; /* Equivalente a tracking-wider */
  }
  .atribute-value-div {
    display: flex; /* Equivalente a flex */
    align-items: center; /* Equivalente a items-center */
    justify-content: center; /* Equivalente a justify-center */
  }
  .atribute-value {
    font-size: 1.875rem; /* Equivalente a text-3xl */
    font-weight: bold; /* Equivalente a font-bold */
    color: white; /* Equivalente a text-white */
  }
 
`;

export default AtributesContainer;

const StyledMod = styled("span")<AtributesContainerProps>`
  color: ${({ modValue }) =>
    modValue > 0 ? "#20e96a" : modValue < 0 ? "#f82929" : "#88898b"};
  margin-left: 0.25rem; /* Equivalente a ml-1 */
`;

export { StyledMod };
