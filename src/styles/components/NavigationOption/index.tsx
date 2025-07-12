import styled from "styled-components";

const StyledNavigationOption = styled("li")`
  margin-top: 4px;
  margin-bottom: 4px;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem; /* Equivalente a p-3 */
    border-radius: 30px; /* Equivalente a rounded-lg */
    color: white;
    background-color: #3730a3; /* Equivalente a bg-indigo-800 */
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #4338ca; /* Equivalente a hover:bg-indigo-700 */
  }

  .icon-span {
    margin-right: 0.75rem; /* Equivalente a mr-3 */
    transition: transform 0.2s ease-in-out;
  }

  .group:hover .icon-span {
    transform: rotate(15deg); /* Equivalente a group-hover:rotate-12 */
  }
  
`;

export default StyledNavigationOption;
