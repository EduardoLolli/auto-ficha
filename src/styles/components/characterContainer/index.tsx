import styled from "styled-components";

const StyledCharacterContainer = styled("div")`
  /* flex-1 bg-gray-900 bg-opacity-70 rounded-lg border-2 border-indigo-700 p-6 overflow-y-auto */
  flex: 1; /* Equivalente a flex-1 */
  background-color: rgba(
    17,
    24,
    39,
    0.7
  ); /* Equivalente a bg-gray-900 com 70% de opacidade */
  border-radius: 25px; /* Equivalente a rounded-lg */
  border: 2px solid #4f46e5; /* Equivalente a border-2 border-indigo-700 */
  padding: 1.5rem; /* Equivalente a p-6 */
  overflow-y: auto; /* Equivalente a overflow-y-auto */

  .header-container {
    margin-bottom: 25px;
  }

  .header-container h2 {
    font-size: 1.875rem; /* Equivalente a text-3xl */
    font-weight: bold; /* Equivalente a font-bold */
    color: white; /* Equivalente a text-white */
    border-bottom: 2px solid #f59e0b; /* Equivalente a border-b-2 border-amber-500 */
    padding-bottom: 0.5rem; /* Equivalente a pb-2 */
    display: flex; /* Equivalente a flex */
    align-items: center; /* Equivalente a items-center */
  }

  .header-icon {
    margin-right: 0.75rem; /* Equivalente a mr-3 */
    color: #f59e0b; /* Equivalente a text-amber-500 */
  }
  .container-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Equivalente a grid-cols-3 */
    gap: 1rem; /* Equivalente a gap-4 */
    margin-bottom: 1.5rem; /* Equivalente a mb-6 */
  }
`;

export default StyledCharacterContainer;
