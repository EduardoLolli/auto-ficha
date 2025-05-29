import styled from "styled-components";

export const StyledCharacterCard = styled.div`
  /* Adicione seus estilos aqui */
  width: 25%;
  background-color: rgba(0, 0, 0, 0.5); /* bg-gray-800 bg-opacity-50 */
  border-radius: 0.75rem; /* rounded-xl */
  padding: 1.5rem; /* p-6 */
  border: 1px solid rgba(0, 81, 255, 0.3); /* border border-purple-500/30 */
  transition: all 0.2s;
  box-shadow: 0 10px 20px 0 rgba(139, 92, 246, 0.08); /* shadow-xl */
  cursor: pointer;
  backdrop-filter: blur(4px); /* backdrop-blur-sm */

  &:hover {
    border-color:rgb(0, 47, 255); /* hover:border-primary-400 */
  }
  .primary-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .character-title {
    font-size: 1.25rem; /* text-xl */
    font-weight: 700; /* font-bold */
  }
  .info-container {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .info-text {
    color: #9ca3af; /* text-gray-400 */
  }
  .chr-selec-button {
    padding: 0.25rem 0.75rem; /* px-3 py-1 */
    align-items: right;
    border-radius: 9999px; /* rounded-full */
    background-color:rgb(34, 37, 230); /* bg-primary-600 */
    transition: all 0.2s; /* transition-all */
    font-size: 0.875rem; /* text-sm */
    color: #fff;
    &:hover {
      background-color:rgb(14, 12, 167); /* hover:bg-primary-500 */
    }
  }
`;
