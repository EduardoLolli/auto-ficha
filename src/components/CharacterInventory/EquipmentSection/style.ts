import styled from "styled-components";

export const StyledEquipmentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  .equipment-card {
    border: 2px solid #1e40af;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background-color: rgba(31, 41, 55, 0.9);
    backdrop-filter: blur(4px);

    border-radius: 0.5rem;
    color: var(--card-foreground);
    background-color: var(--card, rgba(31, 41, 55, 0.9));
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1.5rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #dbeafe;
  }

  .card-descrip {
    font-size: 0.875rem;
    color: #60a5fa;
    opacity: 0.7;
  }

  .layout-container {
    padding: 1.5rem;
  }

  .body-items {
    position: relative;
    max-width: 28rem;
    margin-left: auto;
    margin-right: auto;
  }

  .items-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .slot-item {
    border-width: 2px;
    border-style: dashed;
    border-color: #4b5563;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;
    &:hover {
      border-color: #3b82f6;
    }

    width: 4rem;
    height: 4rem;

    @media (min-width: 640px) {
      width: 5rem;
      height: 5rem;
    }
  }

  .icons-empty {
    color: #dbeafe;
  }

  

`;
