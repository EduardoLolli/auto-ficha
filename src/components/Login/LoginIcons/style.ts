import styled from "styled-components";

export const StyledLoginIcons = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .head-title {
    font-size: 2.25rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
  }

  .head-p {
    font-size: 1rem;
    color: #cbd5e1; /* text-slate-300 */
    margin-bottom: 1.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  .icon {
    height: 2rem;
    width: 2rem;
    color: white;
  }
`;

export const BgIcon = styled.div`
  padding: 0.75rem;
  background: linear-gradient(to right, #2563eb, #475569);
  border-radius: 100%;
`;

export const BGIconRev = styled.div`
  padding: 0.75rem;
  background: linear-gradient(to right, #475569, #2563eb);
  border-radius: 100%;
`;
