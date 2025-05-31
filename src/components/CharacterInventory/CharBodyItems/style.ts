import styled from "styled-components";

export const StyledCharBody = styled.div`
  flex: 1;
  .char-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgb(157, 220, 247);
  }

  .char-info-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .char-info-card {
    width: 4rem;
    height: 4rem;
    background-color: #334155; /* bg-slate-700 */
    border: 2px solid #475569; /* border-slate-600 */
    border-radius: 0.5rem; /* rounded-lg */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    &:hover {
      border-color: #0ea5e9; /* primary-500 */
      box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.2);
    }
  }
`;
