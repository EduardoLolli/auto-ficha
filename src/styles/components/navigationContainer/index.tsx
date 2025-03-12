import styled from "styled-components";

const StyledNavigationContainer = styled("main")`
  width: 16rem; /* Equivalente a w-64 */
  background-color: rgba(17, 24, 39, 0.8); /* bg-gray-900 com opacidade 80% */
  border-radius: 25px; /* Equivalente a rounded-lg */
  margin-right: 1.5rem; /* Equivalente a mr-6 */
  overflow: hidden;
  border: 2px solid #4338ca; /* Equivalente a border-2 border-indigo-700 */
  backdrop-filter: blur(8px); /* Equivalente a backdrop-blur-sm */

  .navigation-header {
    padding: 1.25rem; /* Equivalente a p-5 */
    background-color: #3730a3; /* Equivalente a bg-indigo-800 */
    border-bottom: 2px solid #312e81; /* Equivalente a border-b-2 border-indigo-900 */
  }

  .header-info {
    display: flex;
    align-items: center;
  }

  .header-info img {
    width: 4rem; /* Equivalente a w-16 */
    height: 4rem; /* Equivalente a h-16 */
    object-fit: cover; /* Equivalente a object-cover */
    border-radius: 50%; /* Equivalente a rounded-full */
    border: 2px solid #d97706; /* Equivalente a border-2 border-amber-500 */
  }

  .section {
    margin-left: 0.7rem;
  }

  .header-info h3 {
    font-size: 1.25rem; /* Equivalente a text-xl */
    font-weight: bold; /* Equivalente a font-bold */
    color: white; /* Equivalente a text-white */
  }

  .header-info p {
    color: #c7d2fe;
  }

  .generic-status {
    margin-top: 0.75rem; /* Equivalente a mt-3 */
    background-color: rgba(
      28,
      25,
      109,
      0.829
    ); /* bg-indigo-900 com 60% de opacidade */
    border-radius: 15px; /* Equivalente a rounded-lg */
    padding: 0.5rem; /* Equivalente a p-2 */
  }

  .status-value {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem; /* Equivalente a text-xs */
    color: #e0e7ff; /* Equivalente a text-indigo-100 */
    margin-bottom: 0.25rem; /* Equivalente a mb-1 */
  }

  .hp-status-bar {
    width: 100%; /* Equivalente a w-full */
    height: 0.5rem; /* Equivalente a h-2 */
    background-color: #374151; /* Equivalente a bg-gray-700 */
    border-radius: 9999px; /* Equivalente a rounded-full */
  }

  .xp-status-bar {
    width: 100%; /* Equivalente a w-full */
    height: 0.5rem; /* Equivalente a h-2 */
    background-color: #374151; /* Equivalente a bg-gray-700 */
    border-radius: 9999px; /* Equivalente a rounded-full */
  }

  .hp-bar {
    background-color: #ef4444; /* Equivalente a bg-red-500 */
    height: 0.5rem; /* Equivalente a h-2 */
    border-radius: 9999px; /* Equivalente a rounded-full */
  }

  .xp-bar {
    background-color: #3b82f6; /* Equivalente a bg-blue-500 */
    height: 0.5rem; /* Equivalente a h-2 */
    border-radius: 9999px; /* Equivalente a rounded-full */
  }
`;

export default StyledNavigationContainer;
